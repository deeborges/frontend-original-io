import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../input';

export const BuscaContainer = styled.div`
  align-items: center;
  display: grid;
  height: auto;
  padding: 0.5rem;
  position: relative;
  width: auto;
`;

export const InputLink = styled(Link)`
  display: grid;
  height: auto;
  width: auto;

  &:hover {
    cursor: pointer;
    transition: all 0.1s;
  }
`;

export const IconeBusca = styled.img`
  display: grid;
  height: 1.5rem;
  margin-left: 0.5rem;
  position: absolute;
  z-index: 1;
`;

export const InputBusca = styled(Input)`
  border: none;
  border-bottom: 1px solid #cccccc;
  font-size: 0.75rem;
  padding: 0.5rem 0;
  padding-left: 2rem;

  &:focus {
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.5ms;
    width: 100%;
  }
`;
