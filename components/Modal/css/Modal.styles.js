import styled from "styled-components";
import Colors from "../../../helpers/Colors";
const { Neutral } = Colors();

const ModalCss = () => {

    const ModalStyles = styled.div`
        position:fixed;
        background-color:rgba(0,0,0,0.6);
        height:100vh;
        width:100%;
        top:0px;
        left:0px;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:100;
    `
    const ModalStyles__article = styled.article`
        background-color:white;
        max-width:380px;
        width:90%;
        padding:40px;
        padding-top:30px;
        padding-left:60px;
        padding-right:60px;
        border-radius:20px;
        border-radius:10px;
    `

    const ModalStyles__articleContainer = styled.div`
        width:100%;
        display:grid;
        grid-template-columns:50% auto;
        padding-bottom:30px;
        align-items:center;

    h3 {
        color:${Neutral['Dark']};
        text-transform:uppercase; 
        font-size:130%;
    }
    `

    const ModalStyles__close = styled.div`
        display:flex;
        justify-content:flex-end;


    img {
        cursor: pointer;
    }
    `

    return {
        ModalStyles,
        ModalStyles__article,
        ModalStyles__articleContainer,
        ModalStyles__close
    }
}

export default ModalCss;