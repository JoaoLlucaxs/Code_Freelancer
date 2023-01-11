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
     background-color:  #cccc;
    border-radius: 5px;
    padding: .8em;
    align-items: center;
    margin-bottom: 1em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    span{
        margin: 2em 0;
        font-size: 1.2em;
    }
    a{
        float:right;
        margin-bottom:1.5em;
        background-color: #000046;
        color:#fff;
        padding: .5em;
        display: flex;
        justify-content: center;
    }

`
export const table=styled.table`
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin:0;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    table caption{
        font-size: 1.5em;
        margin: .5em 0 .75em;
    }
    tr{
        background-color: #f8f8f8;
        border: 1px solid #E3B10E;
        padding: .35em;
    }
    th,td{
        padding: .62em;
        text-align: center;
    }
    th{
        font-size:.85em;
        letter-spacing: .1em;
        text-transform: uppercase;
    }
    td .action{
        border: 0;
        padding: 5px;
        margin-right: 2px;
        align-items: center;
        display: inline-block;
        border-radius: 4px;
    }
    td .action svg{
        vertical-align: middle;
    }
    td .status{
        padding: 3px;
        border-radius: 3px;
        color: #fff;
    }

    @media screen and (max-width: 600px){
        table{
            border: 0;
        }
        caption{
            font-size: 1.3em;
        }
        thead{
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }
        tr{
            border-bottom: 3px solid #E3B10E;
            display: block;
            margin-bottom: .65em;
        }
        td{
            border-bottom: 1px solid #E3B10E;
            display: block;
            font-size: .8em;
            text-align: right;
        }
        td:before{
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
        table td:last-child{
            border-bottom: 0;
        }
    }

`

export const button=styled.button`
    margin: 1.5em 0;
    padding: .5em 1em;
    height: 35px;
    border: 0;
    background-color: #000046;
    color: #fff;
    font-size: 1.1em;
`