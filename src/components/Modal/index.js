
import * as M from './modal'
import {FiX} from 'react-icons/fi'


const Modal=({conteudo,close})=>{
    return(
        <M.Modal>
            <M.Container>
                <M.button onClick={close}>
                    <FiX size={23} color='#fff'/>
                    Voltar
                </M.button>

                <M.detalhes>
                    <h2>Detalhes do Cliente</h2>

                    <M.assunto>
                        <span>
                            Cliente: <i>{conteudo.cliente}</i>
                        </span>
                    </M.assunto>

                    <M.assunto>
                        <span>
                            Assunto: <i>{conteudo.assunto}</i>
                        </span><hr/>
                        <span>
                            Cadastrado em : <i>{conteudo.formateDate}</i>
                        </span>
                    </M.assunto>

                    <M.assunto>
                        <span>
                            Status: <i style={{color:'#fff',backgroundColor: conteudo.status === 'Em aberto'? '#5cb85c': "#cccc"}}>{conteudo.status}</i>
                        </span>
                    </M.assunto>

                    {conteudo.complemento !== '' && (
                        <>
                        <h3>Complemento </h3>
                        <p>{conteudo.complemento}</p>
                        </>
                    )}

                </M.detalhes>
            </M.Container>
        </M.Modal>
    )
}


export default Modal