import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
  position: relative;
  width: 100%;
`;

export const MenuContent = styled.div`
  align-items: center;
  display: grid;
  height: inherit;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 0 2.5rem;
  position: relative;
  width: inherit;
`;

export const MenuOpcoesLoginCadastroContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  height: auto;
  position: relative;
  width: 100%;

  span {
    color: #686868;
    font-family: 'Montserrat-Regular';
    font-size: 0.75rem;
    padding: 1rem 0;
    position: relative;
    text-decoration: none;
    width: fit-content;
  }
`;

export const MenuOpcoesLoginCadastroContent = styled(Link)`
  color: #686868;
  font-family: 'Montserrat-Regular';
  font-size: 0.75rem;
  padding: 1rem 0;
  position: relative;
  text-decoration: none;
  width: fit-content;

  &:hover {
    cursor: pointer;
    height: 100%;
    opacity: 0.8;
    position: relative;
    transition: all 0.1s;
    width: 100%;
  }
`;

export const MenuListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
  position: relative;
  width: 100%;
`;

export const MenuListContent = styled.ul`
  display: grid;
  list-style: none;
  gap: 2rem;
  grid-auto-flow: column;
  padding: 0.5rem;
  position: relative;
`;

export const MenuListContentLink = styled(Link)`
  position: relative;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    position: relative;
    transition: all 0.1s;
  }
`;

export const MenuListTextContent = styled.span`
  color: #686868;
  font-family: 'Montserrat-Regular';
  font-size: 0.8rem;
  position: relative;
  text-transform: uppercase;
  width: fit-content;
`;

export const BuscaBagContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  height: auto;
  position: relative;
  width: auto;
`;
