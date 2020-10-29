import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled(Link)`
  align-items: center;
  background-color: ${(props) => props.brackgroundcolor ?? null};
  display: grid;
  height: ${(props) => props.height ?? 'auto'};
  justify-content: ${(props) => props.justifycontent ?? null};
  padding: ${(props) => props.padding ?? null};
  position: relative;
  text-decoration: none;
  width: ${(props) => props.width ?? 'auto'};
`;

export const ButtonContent = styled.span`
  color: ${(props) => props.color ?? null};
  font-weight: bold;
  position: relative;
  width: fit-content;
`;
