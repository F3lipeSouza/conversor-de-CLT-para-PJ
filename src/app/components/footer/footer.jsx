'use client'

import { Container, Link } from './footerStyled';

export function Footer(){
    return (
        <Container>
            <h2>Obrigado pelo acesso. </h2>
            <h2>Aproveite para visualizar outros projetos.</h2>
            <h2>Meu contato se encontra nos links: </h2>
            <Link><a href="https://github.com/F3lipeSouza"> Meu GitHub</a></Link>
            <Link><a href="https://www.linkedin.com/in/felipe-souza-dev/">Meu linked in</a></Link>           
        </Container>
    )
}