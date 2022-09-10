import Title from '../../components/Title'
import Header from '../../components/Header'
import {FiUser} from 'react-icons/fi'
import * as C from '../Profile/style'
import { useState } from 'react'
import firebase from '../../services/firebaseConection'
import {toast} from 'react-toastify'

export default function Clientes(){
    const[cliente,setCliente]=useState('')
    const[cnpj,setCnpj]=useState('')
    const[endereco,setEndereco]=useState('')


    const handleAdd=async(e)=>{
        e.preventDefault()
        
        if(cliente !=='' && cnpj !== '' && endereco !==''){
            await firebase.firestore().collection('customers')
            .add({
                cliente:cliente,
                cnpj:cnpj,
                endereco:endereco
            })
            .then(()=>{
                setCliente('');
                setCnpj('');
                setEndereco('')
                toast.info('Cliente cadastrado com sucesso!')
            }).catch(()=>{
                toast.error('Erro ao cadastrar cliente')
            })
        }else{
            toast.error('Preencha todos os campos')
        }
    }

    return(
        <div>
            <Header/>

            <C.Content>
                <Title name='Clientes'>
                    <FiUser size={25}/>
                </Title>
            <C.Container style={{backgroundColor:"#E3B10E",color:'#FFF'}}>
               <C.formProfile onSubmit={handleAdd}>
               <label>Cliente / Nome da Empresa </label>
                <input type='text' placeholder='Cliente' value={cliente} onChange={(e)=>setCliente(e.target.value)}/>

                <label>CNPJ </label>
                <input type='number' placeholder='Seu CNPJ' value={cnpj} onChange={(e)=>setCnpj(e.target.value)}/>

                <label>Endereço </label>
                <input type='text' placeholder='Endereço da empresa' value={endereco} onChange={(e)=>setEndereco(e.target.value)}/>

                <C.button type='submit'>Cadastrar</C.button>
               </C.formProfile>
            </C.Container>
            </C.Content>
        </div>
    )
}