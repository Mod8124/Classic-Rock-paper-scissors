import styled from "styled-components";
import Colors from "../../../helpers/Colors";

const { Primary, Neutral } = Colors();


export const CircleArticle = styled.article`
        width:100%;
        height:100%;
        display:grid;
        grid-template-columns:50% 50%;
        max-width:${(props)=>props.grid === true ?'900px':'750px'};
        margin:0 auto;
        align-items:center;
        text-align:center;

    @media screen and (min-width:600px) {
        grid-template-columns:${(props)=> props.grid === true ? '40% 20% 40%':"50%  50%"};  
    }

    `

export const CircleArticle__result = styled.div`
        position:relative;
        z-index:2;
    h3 {
        color: white;
        text-transform:uppercase ;
        letter-spacing:3px;
        font-size:34px;
        padding-bottom:20px;
    }

    button {
        background-color:white;
        padding:14px ;
        width:60%;
        margin:0 auto;
        color:${Neutral['Dark']};
        border-radius:10px;
        text-transform:uppercase;
        font-size:16px;
        border:none;
        cursor: pointer;
        transition:all 0.3s ease-in-out;
    }

    button:hover {
        color:${Primary["rock"][0]};
    }

    @media screen and (min-width:600px) {
        button {
            width:100%;
            padding:10px ;
        }
    }
    @media screen and (max-width:599px) {
        order:3;
        grid-column: 1 / span 2;
    }
    `

export const CircleNotActive = styled.div`
        width:130px;
        height:130px;
        background-color:${Neutral['Dark']};
        margin:0 auto;
        border-radius:50%;
        transition:all 0.5s;

    @media screen and (min-width:600px){
        width:200px;
        height:200px;
    } 
    `

export  const CircleArticle__picked = styled.div`
    h2 {
        padding-bottom:30px;
        color:white;
        z-index:2;
        position: relative;
        text-transform:uppercase;
        letter-spacing:2px;
        font-size:1em;
    }

    @media screen and (min-width:600px){
        h2 {
            font-size:1.6em;
        }
    }
    `

export default CircleArticle;


