import React from 'react'
import {Link} from 'react-router-dom'
import pdf from '../../assets/Contrato-mensal.pdf'
import pdf2 from '../../assets/contrato.pdf'
import slogan from '../../assets/JlQ.png'
import {Contract} from './style'

function contratos() {
  return (
    <Contract>
        <h1>Modelos de contrato para você</h1>
        <p>Aqui estão modelos de contrato para você utilizar no dia a dia caso seja <strong>Freelancer</strong></p>
        <a href={pdf} download>Modelo 1 Baixe</a>
        <a href={pdf2} download>Modelo 2 Baixe</a>
        <Link to='/' style={{background:" #E3B10E"}}>Voltar</Link>
        <span>Boa Sorte!</span>
        Ass <img src={slogan} style={{width:'100px'}} alt=''/> 
    </Contract>
  )
}

export default contratos