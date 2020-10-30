import { createGlobalStyle } from 'styled-components';
import { MontserratFontFace } from './font.styles';

export default createGlobalStyle`
  ${MontserratFontFace};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }
  body {
    font-family: 'Montserrat-Regular', sans-serif;
  }
`;
