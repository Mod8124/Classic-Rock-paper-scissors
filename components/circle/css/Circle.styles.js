import styled, {css} from "styled-components";
import Colors from "../../../helpers/Colors";
const { Primary } = Colors();



 export   const CircleStyled = styled.div`
      width:${(props)=>props.lizard === true ? '110px': '130px'};
      height:${(props)=> props.lizard === true ? '110px':'130px'};
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:1;
      background-color: ${(props)=>props.color ? Primary[props.color][0]:''};
      border-bottom: ${(props)=> props.lizard === true ? '4px':'6px'} solid ${(props)=>props.color ? Primary[props.color][1]:''};
      position: relative;
      transition:all 0.5s;
      margin:0 auto;
      box-shadow:${(props)=>props.shadow === true ? '0px 0px 0px 20px rgba(59, 67, 99, 0.9), 0px 0px 0px 40px rgba(59, 67, 99, 0.5), 0px 0px 0px 70px rgba(59, 67, 99, 0.2)':''};
      cursor: pointer;

    &::before {
        content:'';
        position:absolute;
        height:${(props)=> props.lizard === true ? '80px':'92px'};
        width:${(props)=>props.lizard === true ? '88px':'104px'};
        background-color: white;
        border-top: ${(props)=> props.lizard === true ? '8px solid hsl(0,0%,90%) ':'12px solid hsl(0, 0%, 90%)'};
        top:10%;
        left:10%;
        border-radius:50%;

    }

    ${props => props.shadow === false && css`
    &:hover {
      box-shadow:0px 0px 8px 4px  ${(props)=>props.color ? Primary[props.color][0]:''};
    }
  `}

  @media screen and (min-width: 600px) {
    width:${(props)=>props.lizard === true ? '140px': '200px'};
    height:${(props)=> props.lizard === true ? '140px':'200px'};
    border-bottom: ${(props)=> props.lizard === true ? '6px':'10px'} solid ${(props)=>props.color ? Primary[props.color][1]:''};
    box-shadow:${(props)=>props.shadow === true ? '0px 0px 0px 50px rgba(59, 67, 99, 0.9), 0px 0px 0px 110px rgba(59, 67, 99, 0.5), 0px 0px 0px 180px rgba(59, 67, 99, 0.2)':''};

    &::before {
      height:${(props)=> props.lizard === true ? '102px':'148px'};
        width:${(props)=>props.lizard === true ? '112px':'160px'};
    }
  }

  `

 export const CircleStyled__img = styled.div`
    width:40px;
    height:40px;
    position: relative;

  @media screen and (min-width: 600px) {
    width:${(props)=>props.lizard};
    height:${(props)=>props.lizard};
  }

  `

  export default CircleStyled;

