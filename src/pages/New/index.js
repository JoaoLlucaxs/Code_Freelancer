import Header from "../../components/Header"
import Title from "../../components/Title"
import {FiPlus} from 'react-icons/fi'
import * as C from './new'
import { useState,useEffect,useContext } from "react"
import {useParams,useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/auth'
import firebase from '../../services/firebaseConection'
import {toast} from 'react-toastify'


export default function New(){
    const[loadinCustomers,setLoadinCustomers]=useState(true)
    const[customers,setCustomers]=useState([])
    const[customersSelected,setCustomersSelected]=useState(0)

    const[suporte,setSuporte]=useState('Suporte')
    const[status,setStatus]=useState('Em aberto')
    const[complemento,setComplemento]=useState('')
    const[idCustomers,setIdCustomers]=useState(false)

    const {user}=useContext(AuthContext)
    const {id}=useParams()
    const history=useHistory()

    useEffect(()=>{
        async function loadCustomer(){
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot)=>{
                let lista=[]

                snapshot.forEach((doc)=>{
                    lista.push({
                        id:doc.id,
                        cliente:doc.data().cliente
                    })
                    if(lista.length === 0){
                        setCustomers([{id:'1',cliente:'Freelancer'}])
                        setLoadinCustomers(false)
                        return
                    }

                    setCustomers(lista)
                    setLoadinCustomers(false)

                    if(id){
                        editLoadId(lista)
                    }
                })
            }).catch((error)=>{
                setLoadinCustomers(false)
                setCustomers([{id:'1',cliente:''}])
            })
        }
        loadCustomer()
    },[id])

    async function register(e){
        e.preventDefault()

        if(idCustomers){ //se estiver true =tentando editar
            await firebase.firestore().collection('chamados')
            .doc(id)
            .update({
                cliente:customers[customersSelected].cliente,
                clienteId:customers[customersSelected].id,
                assunto:suporte,
                status:status,
                complemento:complemento,
                userId:user.uid
            }).then(()=>{
                toast.success('Editado com sucesso!')
                setCustomersSelected(0)
                setComplemento('')
                history.push('/dashboard')
            }).catch((error)=>{
                toast.error('Erro ao editar, tente novamente mais tarde')
                console.error('Error', error)
            })
            return
        }
       await firebase.firestore().collection('chamados')
       .add({
        created:new Date(),
        cliente:customers[customersSelected].cliente,
        clienteId:customers[customersSelected].id,
        assunto:suporte,
        status:status,
        complemento:complemento,
        userId:user.uid
       }).then(()=>{
        toast.success('Cliente cadastrado com sucesso!')
        setComplemento('')
        setCustomersSelected(0)
       }).catch(()=>{
        toast.error('Ops, erro ao registrar tente novamente mais tarde.')
       })
    }

    const changeSelect=(e)=>{ //quando troca assunto
        setSuporte(e.target.value)
    }

    const optionChange=(e)=>{ //Chama quando troca status
        setStatus(e.target.value)
    }

    
    const changeCustomers=(e)=>{ 
        setCustomersSelected(e.target.value)
    }

   async function editLoadId(lista){
        await firebase.firestore().collection('chamados').doc(id)
        .get()
        .then((snapshot)=>{
            setSuporte(snapshot.data().suporte)
            setStatus(snapshot.data().status)
            setComplemento(snapshot.data().complemento)

            let index=lista.findIndex(item => item.id === snapshot.data().clienteId)
            setCustomersSelected(index)
            setIdCustomers(true)
        }).catch((error)=>{
            console.error('Erro no id', error)
            setIdCustomers(false)
        })
   }

    return(
        <div>
            <Header/>

        <C.content>
            <Title name='Registro'>
                <FiPlus size={25}/>
            </Title>

            <C.Container>
                <C.form onSubmit={register}>
                    <label>Cliente</label>
                    {loadinCustomers ? (
                        <input type='text' disabled={true} value='Carregando clientes...'/>
                    ):(
                        <select value={customersSelected} onChange={changeCustomers}>
                        {customers.map((item,index)=>{
                            return(
                                <option key={item.id} value={index}>
                                    {item.cliente}
                                </option>
                            )
                        })}
                    </select>
                    )}
                    
                    <label>Assunto</label>
                    <select value={suporte} onChange={changeSelect}>
                        <option value='Suporte'>Suporte</option>
                        <option value='Desenvolvimento'>Desenvolvimento</option>
                        <option value='Manutenção'>Manutenção</option>
                        <option value='Manutenção'>Dias para pagamento</option>
                    </select>
                    <label>Status</label>
                    <C.status>
                        <input type='radio'
                        name="radio"
                        value='Em aberto'
                        onChange={optionChange}
                        checked={status === 'Em aberto'}/>
                        <span>Em Aberto</span>

                        <input type='radio'
                        name="radio"
                        value='Em Progresso'
                        onChange={optionChange}
                        checked={status === 'Em Progresso'}/>
                        <span>Em Progresso</span>

                        <input type='radio'
                        name="radio"
                        value='Atendido'
                        onChange={optionChange}
                        checked={status === 'Atendido'}
                        />
                        <span>Atendido</span>
                    </C.status>

                    <label>Complemento</label>
                    <C.textarea type='text' value={complemento}
                    placeholder="Descreva informaçoes adicionais (Opcional)"
                    onChange={(e)=>setComplemento(e.target.value)}/>

                    <C.button type="submit" >Registrar</C.button>
                </C.form>
            </C.Container>
        </C.content>
        </div>

    )
}