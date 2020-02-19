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
        font-family: 'Montserrat',sans-serif;
        font-size: 62.5%;
        margin: 0;
    }
`;

export default GlobalStyle;
