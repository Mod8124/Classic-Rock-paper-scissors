import { useDispatch } from "react-redux";
import { add } from "../../redux/store/user";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

 const ModalInputLogic = () => {
    
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const user = useSelector((state) => state.user.value);
    const [confirmation, setConfirmation] = useState(false) ;

    const changeName = (e) => {
       setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name !== '') {
            setConfirmation(true)
        }
    }

    const handleCancel = () => {
        setConfirmation(false)
    }

    const handleConfirmation = () => {
        dispatch(add(name))
    }

    useEffect(()=> {
        localStorage.setItem('user', JSON.stringify(user))
    },[user])

    return {
        changeName,
        handleSubmit,
        name,
        confirmation,
        handleCancel,
        handleConfirmation
    }
}

export default ModalInputLogic;