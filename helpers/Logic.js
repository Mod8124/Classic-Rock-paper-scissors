import { useEffect, useState } from "react"
import { useSelector} from "react-redux";

const Logic = () => {

    const user = useSelector((state) => state.user.value)
    const [showModalInput, setShowModalInput] = useState(false)
    const [showOptions, setShowOptions] = useState(true)
    const [selected ,setSelected] = useState(null)

    const handleSelected = (value) => {
        setSelected(value)
    }

    const handleRestart = () => {
        setSelected(null)
    }

    useEffect(()=> {

        if(user === '') {
           setShowModalInput(true)
        } else {
            setShowModalInput(false)
        }

        if(selected) {
           setShowOptions(false)
        } else {
            setShowOptions(true)
        }


    },[user, selected])

    return {
        showModalInput,
        showOptions,
        selected,
        handleSelected,
        handleRestart
    }

}

export default Logic;