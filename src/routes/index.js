import { Switch } from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Route from './Route'
import Profile from '../pages/Profile'
import Clientes from '../pages/Clientes'
import Contrato from '../pages/Contratos/contratos'
import New from '../pages/New'


export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Signin}/>
            <Route exact path="/register" component={Signup}/>
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route exact path="/contrats" component={Contrato} isPrivate/>
            <Route exact path="/profile" component={Profile} isPrivate/>
            <Route exact path="/customers" component={Clientes} isPrivate/>
            <Route exact path="/new" component={New} isPrivate/>
            <Route exact path="/new/:id" component={New} isPrivate/>

        </Switch>
    )
}