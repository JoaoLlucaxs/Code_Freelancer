import styled from 'styled-components'


    export const Container=styled.div`
        width: 100vw;
        display:flex;
        height: 100%;
        justify-content: center;
        align-items: center;

    `
    export const logo=styled.div`
        width: 50vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img{
          max-width: 100%;
        }

        @media(max-width:700px){
            display: none;
           
        }
        
    `
   
    export const rightForm=styled.div`
        width: 50vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: -webkit-linear-gradient(to right, #000046, #000046);
        background: linear-gradient(to right, #1CB5E0, #000046); 

        @media(max-width:700px){
           width:100%;
        }
    `

    export const form=styled.form`
        display: flex;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 35px;
        background-color: transparent;
        border-radius: 5px;
        box-shadow: 0 10px 40px #222;

    `
    export const Input=styled.input`
        width: 100%;
        margin-bottom: 0.5em;
        border: 0;
        border-radius: 7px;
        padding: 10px;
        font-size: 15px;
        height: 35px;
        box-shadow: 0 10px 40px #222;
        outline: none;
        box-sizing: border-box;
    `
    export const button=styled.button`
        width: 100%;
        padding: 16px 0px;
       margin: 25px;
       border-radius: 5px;
       font-size: 1em;
       color: #fff;
       border: none;
       background-color: #E3B10E;
        cursor: pointer;
    `
    