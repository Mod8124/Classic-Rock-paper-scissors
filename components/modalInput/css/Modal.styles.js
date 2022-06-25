import styled from "styled-components";
import Colors from "../../../helpers/Colors";
const { Neutral } = Colors();


export const ModalStyles = styled.section`
        width:100%;
        height:100vh;
        background-color:rgba(0,0,0,0.6);
        position:fixed;
        top:0;
        z-index:100;
        display:flex;
        align-items:center;
        justify-content:center;
        left:0;
        ` 
        
export const ModalStyles__Btn = styled.div`
        display:grid;
        grid-row-gap:10px;

        & strong {
        color:  hsl(349, 71%, 52%);
        font-size:0.8em;
        text-align:center;
        }
    `
export const ModalStyles__input = styled.input`
        border:none;
        background-color:none;
        outline:none;
        color:${Neutral['Dark']};
        font-size:18px;
        padding-bottom:4px;
        border-bottom:2px solid ${Neutral["Dark"]};

        &:active {
            background-color:none;
            border:none;
        }
    `
export const ModalStyles__form =  styled.form`
        background-color:blue;
        display:grid;
        grid-template-columns:100%;
        padding:40px;
        grid-row-gap:15px;
        background-color:white;
        border-radius:10px;
        max-width:400px;
        width:90%;
    `

export const ModalStyles__confirmation = styled.div`
        background-color:blue;
        display:grid;
        grid-template-columns:100%;
        padding:40px;
        grid-row-gap:15px;
        background-color:white;
        border-radius:10px;
        max-width:400px;
        width:90%;
        text-align:center;

        h2 {
            color: ${Neutral['Dark']};
            font-size:2em;
        }

        strong {
            color:${Neutral['Score']};
            font-weight:700;
        }

        div {
            width:90%;
            margin:0 auto;
            display:grid;
            grid-template-columns:45% 45%;
            justify-content:space-between;
        }
    `

export const ModalStyles__btn = styled.button`
        padding:10px;
        color:white;
        border:none;
        background-color:${(props)=>props.back};
        border-radius:4px;
        font-size:15px;
        cursor: pointer;
    `
export default ModalStyles;

