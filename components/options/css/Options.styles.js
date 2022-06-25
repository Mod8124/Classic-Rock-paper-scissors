import styled from "styled-components";

export  const OptionsStyled = styled.article`
        width:100%;
        position:relative;
        height:100%;
        display:flex;
        flex-wrap:wrap;
        margin:0 auto;
        max-width:475px;
    `

export  const Options__pentagon = styled.div`
        position:absolute;
        width:80%;
        height:80%;
        top:10%;
        left:10%;
    `

export  const Options__triangle = styled.div`
        position:absolute;
        width:60%;
        height:60%;
        top:20%;
        left:20%;
    `

export  const Options__position = styled.div`
        grid-column: ${(props)=> props.colum};
        align-items:${(props)=>props.colum === '1 / span 2'? 'flex-end':'center'};
        justify-content:center;
        display:grid;
    `

export  const Options__normal = styled.div`
        display:grid;
        grid-template-columns:42% 42%;
        width:100%;
        grid-row-gap:15px;
        justify-content:space-between;
    `

export const Options__lizard = styled.div`
        display:grid;
        grid-template-columns:42% 42%;
        grid-template-rows:25% auto auto;
        width:100%;
        grid-row-gap:15px;
        justify-content:space-between;
    `

export   const Options__OptionsLizard = styled.div`
        grid-column: ${(props)=> props.colum};
        order:${(props)=> props.order};
        justify-content:${(props)=> props.justify?props.justify:'center'};
        display:grid;  
    `

export default OptionsStyled;