import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');
    *,
    *::after,
    *::before{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat',sans-serif;
        font-size: 62.5%;
    }
    body{
        margin:0;
        padding: 0;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
    @media (max-width: 1080px){
        html{
            font-size: 9.5px;
        }
    }
    @media (max-width: 780px){
        html{
            font-size: 7.5px;
        }
    }
    @media (max-width: 480px){
        html{
            font-size: 6.5px;
        }
    }
`;

export default GlobalStyle;
