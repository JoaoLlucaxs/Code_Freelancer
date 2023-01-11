import {useState,useContext} from 'react'
import {AuthContext} from '../../context/auth'
import firebase from '../../services/firebaseConection'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {FiSettings,FiUpload} from 'react-icons/fi'
import * as P from './style'
import avatar from '../../assets/avatar.png'
import {toast} from 'react-toastify'

export default function Profile(){

    const {user,singOut,setUser,storageUser}=useContext(AuthContext)

    const[nome,setNome]=useState(user && user.nome)
    const[email,setEmail]=useState(user && user.email)
    const[avatarUrl,setAvatarUrl]=useState(user && user.avatarUrl)

    const[imageAvatar,setImageAvatar]=useState(null)


    const handleFileImg=(e)=>{
        e.preventDefault()

        if(e.target.files[0]){
            const image=e.target.files[0]

            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImageAvatar(image)
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }else{
                alert('Envie uma imagem png ou jpeg')
                setImageAvatar(null)
                return null
            }

        }


    }

    const handleOploadImg=async()=>{
        const currentUid=user.uid

        const uploadImgTask= await firebase.storage()
        .ref(`images/${currentUid}/${imageAvatar.name}`)
        .put(imageAvatar)
        .then(async()=>{
            toast.success('Foto enviado com sucesso')

            await firebase.storage().ref(`images/${currentUid}`)
            .child(imageAvatar.name).getDownloadURL()
            .then(async(url)=>{
                let fotoUrl=url

                await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    avatarUrl:fotoUrl,
                    nome:nome
                })
                .then(()=>{
                    let data={
                        ...user,
                        avatarUrl:fotoUrl,
                        nome:nome
                    }
                    setUser(data)
                    storageUser(data)
                })
            })
        })
    }

    const handleSave=(e)=>{
        e.preventDefault()

        if(imageAvatar === null && nome !== ''){
           firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                nome:nome
            })
            .then(()=>{
                let data={
                    ...user,
                    nome:nome
                }
                setUser(data)
                storageUser(data)
            })
        }else if(imageAvatar !== null && nome !== ''){
            handleOploadImg()
        }
    }


    return(
        <div>
            <Header/>

            <P.Content>
                <Title name='Meu perfil'>
                    <FiSettings size={25}/>
                </Title>

            <P.Container>
                <P.formProfile onSubmit={handleSave}>
                    <P.LabelAvatar>
                        <P.span>
                            <FiUpload color='#fff' size={25}/>
                        </P.span>
                        <input type='file' accept='image/*' style={{display:'none'}} onChange={handleFileImg}/><br/>
                        {avatarUrl === null ?
                            <img src={avatar} alt='foto de perfil' width='200' height='200'/> :
                            <img src={avatarUrl} alt='foto de perfil' width='250' height='250'/>
                        }
                    </P.LabelAvatar>
                    <label>Nome </label>
                    <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)} />

                    <label>E-mail </label>
                    <input type='email' value={email} disabled={true}/>
                    <P.button type='submit'>Salvar</P.button>
                </P.formProfile>
            </P.Container>

            <P.Container>
                <P.logout onClick={()=>singOut()}>Sair</P.logout>
            </P.Container>
            </P.Content>

        </div>
    )
}