import styled from "styled-components";
import Button from "./Button";


const ButtonDefault = styled(Button)`
    background:${(props)=>props.back ? props.back :"none"};
    padding:8px;
    padding-left:${(props)=> props.pad ? '35px':'10px'};
    padding-right:${(props)=> props.pad ? '35px':'10px'};
    text-transform:${(props)=> props.trans ? 'uppercase':'unsent'};
    color:white;
    letter-spacing:2px;
    font-size:16px;
    border-radius:8px;
    border:2px solid ${(props)=> props.border};
    cursor:${(props)=> props.cursor ? 'default':'pointer'};

    & span {
        color:${(props)=> props.color};
    }
  
`

export default ButtonDefault;