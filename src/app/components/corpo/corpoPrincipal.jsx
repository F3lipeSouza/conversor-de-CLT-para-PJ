'use client'

import { useState } from "react";
import { DivPrincipal, EntraDados, Obrigatorio, Input, BotaoCalcular } from "./corpoPrincipalStyled";


export function Corpo(){

    const [salario, setSalario] = useState(0);
    const [ganhoAnual, setGanhoAnual] = useState()

    const calculaSalario = () =>{
        const salarioAnual = salario * 13; //meses do ano mais decimo terceiro salario
        const porcentagem = 0.40;
        const ferias = (salario * porcentagem) + salario;
        
        setGanhoAnual(salarioAnual + ferias)
    }
    
    
    return(
    <DivPrincipal>
        <EntraDados>
            <h2>Digite seu salário <Obrigatorio>*</Obrigatorio></h2>
            <Input type="number" onChange={e=>setSalario(Number(e.target.value))}/>
            <br/>
            <BotaoCalcular onClick={calculaSalario}>calcular</BotaoCalcular>
        </EntraDados>
        <EntraDados>
            <h2>seu salário deve ser em média:<br/><br/>
            por mês: {ganhoAnual ? ganhoAnual / 12 : null }
            <br/>
            por hora: {ganhoAnual ? ((ganhoAnual / 12) / 22) / 10: null }           
            </h2>
        </EntraDados>
    </DivPrincipal>
    )
}