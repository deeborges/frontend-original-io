import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder ?? 'null',
  type: props.type ?? 'text',
}))`
  border-radius: ${(props) => props.borderRadius ?? null};
  font-family: 'Montserrat-Regular';
  font-size: ${(props) => props.fontSize ?? '10px'};
  margin: ${(props) => props.margin ?? null};
  padding: ${(props) => props.padding ?? null};
  position: relative;
  width: ${(props) => props.width ?? 'auto'};
`;

export default Input;
