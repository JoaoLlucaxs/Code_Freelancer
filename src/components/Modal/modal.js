import styled from 'styled-components'


export const Modal=styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.6);
    z-index: 99;

    span{
    font-weight: bold;
    font-size: 1.2em;
    color: #121212;
    }

    h2{
        margin-bottom: 1.2em;
        font-size: 2em;
        color: #E3B10E;
    }
    p{
        padding-top: 0.5em;
         white-space: pre-wrap;
    }
`

export const Container=styled.div`
    position: fixed;
    max-width: 600px;
    top: 15%;
    left:0;
    right: 0;
    margin: 0 auto;
    padding: 4em 2rem;
    background-color: #f8f8f8;
    box-shadow: 0 0 20px rgba(0,0,0, 0.8);
    border-radius: 5px;

    i{
    font-weight: 400;
    margin-right: 1em;
    padding: 2px 8px;
    border-radius: 3px;
    }
`

export const button=styled.button`
    background-color: #F65835;
  border:0;
  color: #FFF;
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 15px;
  border-radius: 5px;

  svg{
    margin-right:5px ;
  }

`
export const detalhes=styled.div`

`

export const assunto=styled.div`
     margin-bottom: 1em;
`
