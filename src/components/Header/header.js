import styled from 'styled-components'



export const sidebar=styled.div`
    margin: 0;
    padding: 0;
    top: 0;
    width: 200px;
    height: 100%;
    overflow: auto;
    background: #000046; 
    background: -webkit-linear-gradient(to right, #010d23, #000046); 
    background: linear-gradient(to right, #010d23, #000046); 
    position: fixed;

    @media screen and (max-width:700px){
        width: 100%;
        height: auto;
        position: relative;
    }
    @media screen and (max-width:700px){
        a{
            float: left;
        }
    }

    @media screen and (max-width:430px){
        a{
            float: none;
            text-align: center;
        }
    }

`

export const div=styled.div`
    background-color: #010d23;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    padding-top: 30px;

    
    @media screen and (max-width:700px){
        display: none;
    }
`

export const img=styled.img`
    border-radius: 50%;
    display: block;
    margin: auto;
    width: 90px;
    height: 90px;
    filter: drop-shadow(2px 3px 6px #121212);
    -webkit-filter:drop-shadow(2px 3px 6px #121212);
    object-fit: cover;


    @media screen and (max-width:700px){
        display: none;
    }
`