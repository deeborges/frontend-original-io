import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  padding: 0 2.5rem;
  height: 332px;
  width: fit-content;
`;

export const Content = styled.div`
  display: grid;
  gap: 0.5rem;
  height: inherit;
  overflow-y: auto;
  position: relative;
  width: inherit;
`;

export const Seta = styled.img`
  margin: 1rem 0;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;
