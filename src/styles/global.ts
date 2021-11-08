import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar{
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
     background: ${({ theme }) => lighten(0.4, theme.primary)}
    }
  }

  body {
    background: ${props => props.theme.background};
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
