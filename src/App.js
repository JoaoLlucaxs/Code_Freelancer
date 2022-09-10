import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom'
import Route from './routes'
import  AuthProvider  from './context/auth';
import {ToastContainer} from 'react-toastify'



function App() {
  return (
    <AuthProvider>
       <BrowserRouter>
       <ToastContainer autoClose={1000}/>
      <Route/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
