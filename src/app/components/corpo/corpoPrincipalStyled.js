'use client'

import styled from "styled-components"


export const DivPrincipal = styled.div`
display:flex;
justify-content:space-evenly;
height:400px;
flex:1;
`

export const EntraDados = styled.form`
width:350px;
height:300px;
margin-top:36px;
padding:36px;
background-color: #d3d3d3;
border-radius:8px;
box-shadow: -20px 22px 30px 5px rgba(0,0,0,0.75);
`

export const Obrigatorio = styled.span`
color:red;
`

export const Input = styled.input`
 width: 250px;
 margin-top:12px;
 height: 40px;
 border-radius:8px;
 padding-left:8px;
 font-size:24px;
`
export const BotaoCalcular = styled.button`
background-color: green;
color:white;
margin-top:8px;
width:100px;
height:40px;
border-radius:8px;
font-size:24px;
`