import React from 'react';
import {
  Container,
  Content,
  ItemBreadcrumb,
  ItemBreadcrumbLink,
} from './styled';

const Breadcrumb = () => {
  return (
    <Container>
      <Content>
        <ItemBreadcrumb>
          <ItemBreadcrumbLink>Home</ItemBreadcrumbLink>
        </ItemBreadcrumb>
        <ItemBreadcrumb>
          <ItemBreadcrumbLink>/</ItemBreadcrumbLink>
        </ItemBreadcrumb>
        <ItemBreadcrumb>
          <ItemBreadcrumbLink>Sapatos</ItemBreadcrumbLink>
        </ItemBreadcrumb>
      </Content>
    </Container>
  );
};

export default Breadcrumb;
