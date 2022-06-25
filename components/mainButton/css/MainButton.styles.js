import styled from "styled-components";
import Colors from "../../../helpers/Colors";
const { Neutral } = Colors();

const MainButonStyles = styled.button`
    background-color:white;
    display:grid;
    border:none;
    color:${Neutral['Score']};
    font-size:18px;
    text-transform:uppercase;
    letter-spacing:2px;
    padding-top:14px;
    width:100%;
    max-width:100px;
    height:100%;
    border-radius:10px;
    grid-template-columns:100%;

    span {
        color:${Neutral['Dark']};
        font-size:36px;
        font-weight:700;
        max-width:150px;
    }

    @media screen and (min-width:600px) {
        font-size:20px;
        max-width:150px;

        span {
            font-size:60px; 
        }
    }
`

export default MainButonStyles