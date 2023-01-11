import styled from 'styled-components'

export const Content=styled.div`
    margin-left: 200px;
    padding: 1px 16px;

    @media (max-width:700px) {
        margin-left: 0;
    }

`

export const Container=styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    padding: .8em;
    align-items: center;
    margin-bottom: 1em;
`
export const formProfile=styled.form`
    display: block;

    label{
        display: block;
        margin-bottom: .5em;
        font-size: 1.4em;
    }
    input,textarea,select{
        margin-bottom: 1em;
        padding: .7em;
        border: 0;
        border-radius: 5px;
        max-width: 600px;
        background-color: #f0f0d8;
    }
    

`
export const LabelAvatar=styled.label`
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

`
export const span=styled.span`
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition:all .5s;

    &:hover {
        opacity: 1;
        transform: scale(1.4);
    }
`

export const button=styled.button`
    width: 100%;
    background-color: #000046;
    color: #fff;
    border: none;
    padding: .7em;
    border-radius: 5px;
    font-size: 1.1em;
    transition: ease-in-out .5s;

    &:hover {
        background-color: #03223f;
        color: #fff;
    }

`

export const logout=styled.button`
    padding: 8px 20px;
    background-color: red;
    color: #fff;
    border: 1px solid #cccc;
    border-radius: 5px;
    font-size: 1.5em;
    display: flex;
    justify-content:center;
    align-items: center;
`