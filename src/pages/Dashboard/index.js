import{useState,useEffect} from 'react'
import Header from '../../components/Header'

import Title from '../../components/Title'
import * as D from './dashboard'
import {FiMessageSquare,FiPlus,FiSearch,FiEdit2} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import firebase from '../../services/firebaseConection'
import {format} from 'date-fns'
import Modal from '../../components/Modal'



const listRef=firebase.firestore().collection('chamados').orderBy('created','desc')

const Dashboard=()=>{

    const[clientes,setClientes]=useState([])
    const[loadin,setLoadin]=useState(true)
    const[loadinMore,setLoadinMore]=useState(false)
    const[isempty,setIsEmpty]=useState(false)
    const[lastDoc,setLastDoc]=useState()


    const[postModal,setPostModal]=useState(false)
    const[detailModal,setDetailModal]=useState()
    //const {singOut}=useContext(AuthContext)


  useEffect(()=>{
    async function loading(){
      await listRef.limit(5)
      .get()
      .then((snapshot)=>{
        updateState(snapshot)

      }).catch(()=>{
        setLoadinMore(false)
      })
      setLoadin(false)
    }
    loading()

    return()=>{

    }
  },[])



    async function updateState(snapshot){
      const collectionEmpty=snapshot.size === 0
  

      if(!collectionEmpty){
        let lista=[]

        snapshot.forEach((doc)=>{
          lista.push({
            id:doc.id,
            assunto:doc.data().assunto,
            cliente:doc.data().cliente,
            clienteId:doc.data().clienteId,
            created:doc.data().crated,
            formateDate:format(doc.data().created.toDate(),'dd/MM/yyyy'),
            status:doc.data().status,
            complemento:doc.data().complemento

          })
        })

        //Pegando o último documento buscado :

        const lastDoc=snapshot.docs[snapshot.docs.length -1]
        setClientes(clientes => [...clientes,...lista])
        setLastDoc(lastDoc)
      }else{
        setIsEmpty(true)
      }
      setLoadinMore(false)
    }

    async function moreBusca(){
      setLoadinMore(true)
      await listRef.startAfter(lastDoc).limit(5)
      .get()
      .then((snapshot)=>{
        updateState(snapshot)
      })
      .catch((error)=>{
        console.error('Ocorreu um erro ', error)
      })
    }

    function toogleModal(item){
      setPostModal(!postModal)
      setDetailModal(item)
    }

    if(loadin){
      return(
        <div>
          <Header/>
         
          <D.Content>
            <Title name='Gerenciador'>
            <FiMessageSquare size={25}/>
            </Title>
           
            
             <D.Container>
             <span>Buscando registro...</span>
        </D.Container>
        </D.Content>
        </div>
      )
    }


    return(
        <div>
          <Header/>
         
          <D.Content>
            <Title name='Gerenciador'>
            <FiMessageSquare size={25}/>
            </Title>

            {clientes.length === 0 ? (
              
            <D.Container>
            <span>Nenhum cliente registrado...</span>

            <Link to='/new' className='link'>
            <FiPlus/>
            Registrar Cliente /Empresa
            </Link>
          </D.Container>
            ):(
              <>
              
            <Link to='/new' className='link'>
            <FiPlus size={25}/>
            Registrar Cliente /Empresa
            </Link>
              <D.table>
                <thead>
                  <tr>
                    <th scope='col'>Cliente</th>
                    <th scope='col'>Assunto</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Cadastrado em</th>
                    <th scope='col'>#</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((item,index)=>{
                    return(
                     <tr key={index}>
                     <td data-label='cliente'>{item.cliente}</td> 
                     <td data-label='suporte'>{item.assunto}</td>
                     <td data-label='status'>
                       <span className='status' style={{backgroundColor: item.status === 'Em aberto' ? '#5cb85c': '#999'}}>{item.status}</span>
                     </td>
                     <td data-label='Cadastrado'>{item.formateDate}</td>
                     <td data-label='#'>
                       <button className='action' style={{backgroundColor:'#3583f6',color:"#fff"}} onClick={()=>toogleModal(item)}>
                         <FiSearch size={17}/>
                       </button>
                       <Link className='action' style={{backgroundColor:'#f6a935',color:"#fff"}} to={`/new/${item.id}`}>
                         <FiEdit2 size={17}/>
                       </Link>
                     </td>
                   </tr>
                    )
                  })}
                   </tbody>
                 
              </D.table>
              {loadinMore && <h3 style={{textAlign:'center',marginTop: 15}}>Buscando Clientes...</h3>}
              { !loadinMore && !isempty && <D.button onClick={moreBusca}>Buscar Mais</D.button>}
              </>
            )}

          </D.Content>

            {postModal && (
              <Modal
              conteudo={detailModal}
              close={toogleModal}/>
            )}
        </div>
    )
}

export default Dashboard;