import styled from 'styled-components';

export const BagContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 0.75rem;
  grid-auto-flow: column;
  padding: 0.5rem;
  position: relative;
  width: auto;
`;

export const BagImage = styled.img`
  position: relative;
`;

export const BagValue = styled.span`
  color: #686868;
  font-family: 'Montserrat-Regular';
  font-size: 0.75rem;
  position: relative;
  text-decoration: none;
  width: fit-content;
`;
