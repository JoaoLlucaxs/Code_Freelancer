
import React, { useState,useContext } from 'react'
import * as C from '../Signin/signin'
import {Link} from 'react-router-dom'
import logo from '../../assets/slogan.png'
import animation from '../../assets/freelancer.png'
import {AuthContext} from '../../context/auth'

const Signup=()=> {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[nome,setNome]=useState('')
  
  const { singnUp}=useContext(AuthContext)


  const handleForm=(e)=>{
    e.preventDefault()
    
    if(email !== '' && password !=='' && nome !== ''){
      singnUp(email,password,nome)
    }else{
      alert('Preencha os campos corretamente')
    }
  }

  return(
   <C.Container>
          <C.logo>
            <img src={animation} alt=''/>
          </C.logo>

      <C.rightForm>
        <C.form onSubmit={handleForm}>
        <img src={logo} alt='' style={{width:'150px'}}/>
        
          <C.Input type='text' placeholder='Seu nome'
          value={nome}
          onChange={(e)=>setNome(e.target.value)}/>

          <C.Input type='email' placeholder='Digite seu E-mail'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>

          <C.Input type='password' placeholder='Digite sua senha'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>

          <C.button>Cadastrar</C.button>
          <Link to='/' style={{color:"#fff",margin:'1.5em 0',textAlign:"center"}}>Possui Conta ? Entrar</Link>
        </C.form>
      </C.rightForm>
   </C.Container>
  )
}

export default Signup