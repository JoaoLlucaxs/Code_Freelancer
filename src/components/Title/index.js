
import * as T from './style'


export default function Title({children,name}){
    return(
        <T.Title className="title">
            {children}
            <span>{name}</span>
        </T.Title>
    )
}