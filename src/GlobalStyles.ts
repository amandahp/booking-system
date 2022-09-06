import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-size: 12px;
  }
  button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    padding: 20px;
    border-radius: 4px;
    font-weight: 900;
    margin-left: 20px;
}
`

export default GlobalStyle