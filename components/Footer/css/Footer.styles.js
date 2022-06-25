import styled from "styled-components";

export  const FooterStyles = styled.footer`
    width: 100%;
    margin:0 auto;
    display: grid;
    grid-template-columns:50% 50%;
    align-items: center;
    justify-content: center;
  `

export  const FooterStyles__home = styled.div`
    display:grid;
    grid-template-columns:40px 100px;

    img {
      cursor: pointer;
    }
  `

export const FooterStyles__rules = styled.div`
    display:${(props)=>props.display? 'none':'flex'};
    align-items:center;
    justify-content:flex-end;
`

export default FooterStyles;
