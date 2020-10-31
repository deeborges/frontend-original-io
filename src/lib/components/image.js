import styled from 'styled-components';

export const Image = styled.img`
  background-image: url(${(props) => props.url ?? null});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.size ?? null};
  border: none;
  height: ${(props) => props.height ?? null};
  object-fit: cover;
  object-position: top;
  position: relative;
  width: ${(props) => props.width ?? null};
`;
