import styled from 'styled-components'

export const content=styled.div`
        margin-left: 200px;
        padding: 1px 16px;

    @media (max-width:700px) {
        margin-left: 0;
    }
`

export const Container=styled.div`
    display: flex;
    background-color: #222;
    border-radius: 5px;
    padding: .8em;
    margin-bottom: 1em;
    flex-direction: column;
    color: #fff;

`
export const form=styled.form`
       display: block;

label{
    display: block;
    margin-bottom: .5em;
    font-size: 1.4em;
}
input,select{
    margin-bottom: 1em;
    padding: .7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
    background-color: #f0f0d8;
}

`
export const textarea=styled.textarea`
    width: 405px;
    height: 105px;
    resize: none;
`

export const status=styled.div`

    input[type='radio']:not(:first-child){
        padding-left: 15px;
    }
    span{
        padding-left: .5em;
        font-size: 1.3em;
    }

`
export const button=styled.button`
    display: block;
    width: 30%;
    background-color: #000046;
    color: #fff;
    border: none;
    padding: .7em;
    border-radius: 5px;
    font-size: 1.1em;
    margin-top: 1.2em;
    transition: ease-in-out .5s;

    &:hover {
        background-color: #03223f;
        color: #fff;
    }

`