import { useState } from "react";
import { useSelector } from "react-redux";

const FooterLogic = () => {

    const user = useSelector((state) => state.user.value)
    const [showModal,setShowModal] = useState(false)

    const handleShow = () => {
       setShowModal(!showModal)
    }
    return {
        user,
        showModal,
        handleShow
    }
}

export default FooterLogic;