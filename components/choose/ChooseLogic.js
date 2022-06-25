import Imgs from "../../helpers/Imgs";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { normalSum, normalLess } from "../../redux/store/points";

const ChooseLogic = (normal,selected) => {

    const random = (imgs) => {
        return Math.floor(Math.random()*imgs.length)
    }
    const dispatch = useDispatch();
    const {imgNormal,imgLizard} = Imgs();
    const [chooseNormal, setChooseNormal] = useState(imgNormal[random(imgNormal)])
    const [chooseLizard, setChooseLizard] = useState(imgLizard[random(imgLizard)])
    const [active, setActive] = useState(false)
    const [showResult, setShowResult] = useState(null)
    const [result, setResult] = useState('siuu')
    const points = useSelector((state) => state.points.value);
    const user = useSelector((state)=> state.user.value);

    const selectedName = (selected) => {
        return `/icon-${selected}.svg`
    }

    useEffect(()=> {

        setTimeout(()=> {
            setActive(true)
        },700)

        if(active) {
            setTimeout(()=> {
                setShowResult(active)
            },1000)
        }

       if(normal) {
            if(selected === chooseNormal) {
                setResult('you have a draw');
            } else if(
                selected === selectedName('scissors') && chooseNormal.includes('paper') || 
                selected === selectedName('paper') && chooseNormal.includes('rock') ||
                selected === selectedName('rock') && chooseNormal.includes('scissors')
            ) {
                setResult('you win')
            } else {
                setResult('you loose')
            } 
       }

       if(!normal) {
        if(selected === chooseLizard) {
            setResult('you have a draw');
        } else if(
            selected === selectedName('spock') && chooseLizard.includes('scissors') ||
            selected === selectedName('sciss') && chooseLizard.includes('paper') ||
            selected === selectedName('paper') && chooseLizard.includes('rock') ||
            selected === selectedName('rock.') && chooseLizard.includes('lizard') ||
            selected === selectedName('lizar') && chooseLizard.includes('spock') ||

            selected === selectedName('paper') && chooseLizard.includes('spock') || 
            selected === selectedName('spock') && chooseLizard.includes('rock') ||
            selected === selectedName('lizard') && chooseLizard.includes('paper') || 
            selected === selectedName('scissors') && chooseLizard.includes('lizard') ||
            selected === selectedName('rock') && chooseLizard.includes('scissors')

        ) {
            setResult('you win')
        } else {
            setResult('you loose')
        }
       }

    },[active,selected, normal, chooseNormal,result, chooseLizard])

    useEffect(()=> {
            if(showResult && result === 'you win') {
                dispatch(normalSum())
            } else if(showResult && result === 'you loose') {
                dispatch(normalLess())
            }
    },[result,dispatch, showResult])

    useEffect(()=> {
        if(user !== '' && points !== 0) {
            fetch('/api/record', {
                method:"POST",
                body:JSON.stringify({name:user,point:points}),
                headers:{"Content-Type":"application/json"}
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('point', JSON.stringify(points))
                console.log(data)
            }).catch(err => console.log(err))
        }
    },[points,user])


  return {
    chooseNormal,
    chooseLizard,
    active,
    showResult,
    result
  }
}

export default ChooseLogic;