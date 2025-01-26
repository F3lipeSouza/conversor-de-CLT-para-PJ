import styled from "styled-components";


export const Container = styled.div`
    background-color:#e7e2b1;
    height:20vh;
    display:grid;
    justify-content:space-around;
    padding:36px 24px 0px 0px;
    grid-template-rows:repeat(3, auto);
    grid-auto-flow:column;
`


export const Link = styled.h2`
    :hover{
        color:blue;
        text-decoration:underline;
    }
`