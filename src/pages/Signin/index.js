
import React, { useState,useContext } from 'react'
import {AuthContext} from '../../context/auth'
import * as C from './signin.js'
import './signin.js'
import {Link} from 'react-router-dom'
import logo from '../../assets/slogan.png'
import animation from '../../assets/code.gif'

const Signin=()=> {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
  const {signin, loadingAuth}=useContext(AuthContext)

  const handleForm=(e)=>{
    e.preventDefault()
    
    if(email !== '' && password !== ''){
      signin(email,password)
     
    }
   
  }

  return(
   <C.Container>
  
          <C.logo>
            <h2>Faça login <br/> E administre sua agenda de clientes</h2>
            <img src={animation} alt='animation'/>
          </C.logo>
          
      <C.rightForm>
        <C.form onSubmit={handleForm}>
        <img src={logo} alt='' style={{width:'150px'}}/>

          <C.Input type='email' placeholder='Digite seu E-mail'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>

          <C.Input type='password' placeholder='Digite sua senha'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>

          <C.button>{loadingAuth ? 'Carregando...': 'Entrar'}</C.button>
          <Link to='/register' style={{color:"#fff",textAlign:"center"}}>Não possui conta ? Cadastre-se</Link>
        </C.form>
      </C.rightForm>
   </C.Container>
  )
}

export default Signin