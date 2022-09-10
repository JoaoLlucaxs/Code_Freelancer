import * as H from './header'
import usuario from '../../assets/avatar.png'
import {useContext} from 'react'
import {AuthContext} from '../../context/auth'
import {Link} from 'react-router-dom'
import { FiHome,FiUser,FiSettings } from "react-icons/fi";

export default function Header(){
    const {user}= useContext(AuthContext)
    return(
        <H.sidebar>
            <H.div>
            <H.img src={user.avatarUrl === null ? usuario : user.avatarUrl} alt=''/>
            </H.div>


            <Link to='/dashboard' style={{display:'block',
        padding:'16px',textDecoration:'none' ,color:'#ccc'}}>
            <FiHome color='#ccc' size='23' style={{marginRight:'.5em'}}/>
            Gerenciador
            <hr/>
            </Link>

            <Link to='/customers' style={{display:'block' ,padding:'16px',textDecoration:'none',color:'#ccc'}}>
            <FiUser color='#ccc' size='23' style={{marginRight:'.5em'}}/>
            Clientes
            <hr/>
            </Link>

            <Link to='/profile' style={{display:'block' ,padding:'16px',textDecoration:'none',color:'#ccc'}}>
            <FiSettings color='#ccc' size='23' style={{marginRight:'.5em'}}/>
            Configurações
            <hr/>
            </Link>
           
        </H.sidebar>
    )
}