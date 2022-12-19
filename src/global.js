import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body , #root{
  height: 100%;
}
body{
  font-family: 'Roboto',sans-serif;

}
a{
  text-decoration: none;
}
button{
  cursor: pointer;
}
ul{
  list-style: none;
}
*:focus{
  outline: 0;
}
`