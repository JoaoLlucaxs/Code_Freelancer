import {createContext,useState,useEffect} from 'react'
import firebase from '../services/firebaseConection'
import {toast} from 'react-toastify'

export const AuthContext=createContext({})

function AuthProvider({children}){
    const[user,setUser]=useState(null)
    const[loadingAuth,setLoadingAuth]=useState(false)
    const[loading,setLoading]=useState(true)

    useEffect(()=>{

        function loadingStorage(){
            const storageUser=localStorage.getItem('SistemaUser')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }
            setLoading(false)
        }
        
        loadingStorage()
    },[])


    async function signin(email,password){
        setLoadingAuth(true)
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then(async(value)=>{

            let uid=value.user.uid;
            const userProfiler= await firebase.firestore().collection('users')
            .doc(uid).get()

            let data={
                uid:uid,
                nome:userProfiler.data().nome,  //nomes via firebase
                avatarUrl:userProfiler.data().avatarUrl,
                email:value.user.email
            }

            setUser(data)
            storageUser(data)
            toast.success(`Bem vindo de volta ${data.nome}`)
            setLoadingAuth(false)

        }).catch((error)=>{
            console.log(error)
            toast.error('Ops algo deu errado!')
            setLoadingAuth(false)
        })
    }

    async function singnUp(email,password,nome){
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async(value)=>{
            let uid=value.user.uid

            await firebase.firestore().collection('users')
            .doc(uid).set({
                nome:nome,
                avatarUrl:null
            })
            .then(()=>{
                let data={
                    uid:uid,
                    nome:nome,
                    email:value.user.email,
                    avatarUrl:null
                }
                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
                toast.success('Bem vindo a plataforma programador!')
            })
        })
        .catch((error)=>{
            console.log(error)
            toast.error('Ops algo deu errado!')
            setLoadingAuth(false)
        })
    }

    function storageUser(data){
        localStorage.setItem('SistemaUser',JSON.stringify(data))
    }

    async function singOut(){
        await firebase.auth().signOut()
        localStorage.removeItem('SistemaUser')
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{signed:!!user,
        user,
        loading,
        singnUp,
        singOut,
        signin,
        loadingAuth,
        setUser,
        storageUser}}>

            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;