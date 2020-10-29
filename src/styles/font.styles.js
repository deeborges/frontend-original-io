import { css } from 'styled-components';
import {
  MontserratBold,
  MontserratItalic,
  MontserratRegular,
  MontserratSemiBold,
} from '../assets/fonts/montserrat';

export const MontserratFontFace = css`
  @font-face {
    font-family: 'Montserrat-Bold';
    src: url('${MontserratBold}');
  }
  @font-face {
    font-family: 'Montserrat-Italic';
    src: url('${MontserratItalic}');
  }
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url('${MontserratRegular}');
  }
  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url('${MontserratSemiBold}');
  }
`;
