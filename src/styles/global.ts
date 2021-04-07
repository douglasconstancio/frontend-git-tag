import { createGlobalStyle,  } from 'styled-components'

import background from '../assets/teste.png'

export default createGlobalStyle`
    body {
        display: flex;
        margin:0px;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
        background-size: 100% 100%;
        background: url(${background}) no-repeat top;
    }

    h1, h2, h3, h4, h5, h6, a {
        margin: 0;
        padding: 0;
        text-align: center;
        color: #fff;
    }
`
