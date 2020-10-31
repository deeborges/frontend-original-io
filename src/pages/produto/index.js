import React from 'react';
import { Container, ContainerInformacao } from './styled';

import HeaderLogoContainer from '../../lib/views/header/logo-container';
import HeaderMenu from '../../lib/views/header/menu';
import { ProdutoImage } from '../../lib/views/produto/image';
import InformacaoProduto from '../../lib/views/produto/informacao';

import Breadcrumb from '../../lib/components/breadcrumb';
import Thumbs from '../../lib/components/thumbs';

export const PageProduto = () => {
  return (
    <div>
      <HeaderLogoContainer />
      <HeaderMenu />
      <Breadcrumb />
      <Container>
        <Thumbs />
        <ContainerInformacao>
          <ProdutoImage
            height={'556px'}
            url={'https://imgur.com/NEp97DO.png'}
            size={'cover'}
            width={'430px'}
          />
          <InformacaoProduto />
        </ContainerInformacao>
      </Container>
    </div>
  );
};
