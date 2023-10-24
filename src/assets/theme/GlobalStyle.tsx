import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${props => props.theme.colors.dark.main};
        color: #ffffff;
    }

    a {
        text-decoration: none;
        outline: none;
        transition: all .3s ease;
    }
`;

export default GlobalStyle;
