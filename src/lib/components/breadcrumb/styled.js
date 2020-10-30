import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
  position: relative;
  width: 100%;
`;

export const Content = styled.ul`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  height: auto;
  justify-content: flex-start;
  padding: 1rem 2.5rem;
  position: relative;
  width: inherit;
`;

export const ItemBreadcrumb = styled.li`
  list-style: none;
  position: relative;
  width: fit-content;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.1s;
  }

  &:last-child {
    font-family: 'Montserrat-Bold';
    font-weight: 700;
  }
`;

export const ItemBreadcrumbLink = styled(Link)`
  color: #aeb6c1;
  font-family: 'Montserrat-Regular';
  font-size: 0.75rem;
  padding: 1rem 0;
  position: relative;
  text-decoration: none;
  width: fit-content;
`;
