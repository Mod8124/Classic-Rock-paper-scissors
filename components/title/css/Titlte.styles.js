import styled from "styled-components";
import Colors from "../../../helpers/Colors";

const { Neutral } = Colors();

export const TitlesStyles = styled.header`
        display:grid;
        grid-template-columns:50% 50%;
        border:4px solid ${Neutral['Dark']};
        padding:15px;
        padding-left:20px;
        padding-right:20px;
        width: 100%;
        max-width:700px;
        margin:0 auto;
        border-radius:20px;
        min-height:130px;
        align-items:center;

    h1 {
        color:white;
        cursor:pointer;
        font-size:1.4em;
    }

    @media screen and (min-width:600px) {
        width: 90%;
        min-height:156px;

        h1 {
            font-size:2em;
        }
    }
    `
export  const TitlesStyles__logo = styled.div`
        display:flex;
        align-self:center;
        align-items:center;
        position: relative;
        width:${(props)=>props.logo === true ? '110px':'100px'};
        height:${(props)=>props.logo === true ? '100px':'100px'};


    @media screen and (min-width:600px) {
        /* width:${(props)=>props.logo === true ? '160px':'110px'}; */
        width:${(props)=>props.logo === true ? '130px':'170px'};
        height:${(props)=>props.logo === true ? '120px':'100px'};
    }
    `

export  const TitlesStyles__btn = styled.div`
        display:flex;
        justify-content:flex-end;
        height:100%;
    `


