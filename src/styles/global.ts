import { createGlobalStyle } from 'styled-components';
import Background from '../../public/pokedex.png';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    width: 100%;
    background: url(${Background});
    font: 400 1rem 'Montserrat', sans-serif;
  }
  img{
    width: 100%;
    max-width: 100%;
  }
ul{
  list-style: none;
}
button{
  cursor: pointer;
}
a{
  text-decoration: none;
}
`;
