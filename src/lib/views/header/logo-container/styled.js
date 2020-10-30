import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  height: inherit;
  justify-content: center;
  padding: 24px 0;
  position: relative;
  width: inherit;
`;

export const Logo = styled.img`
  position: relative;
`;
