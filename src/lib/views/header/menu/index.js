import React, { useState } from 'react';
import {
  MenuContainer,
  MenuContent,
  MenuListContainer,
  MenuListContent,
  MenuListTextContent,
  MenuListContentLink,
  MenuOpcoesLoginCadastroContainer,
  MenuOpcoesLoginCadastroContent,
  BuscaBagContainer,
} from './styled';

import Busca from '../../../components/busca';
import Bag from '../../../components/bag';

const Menu = () => {
  const [value, setValue] = useState(0);

  return (
    <MenuContainer id="menu--container">
      <MenuContent id="menu--content">
        <MenuOpcoesLoginCadastroContainer id="menu-opcoes-login-cadastro--container">
          <MenuOpcoesLoginCadastroContent id="menu-opcoes-login-cadastro--content">
            Entrar
          </MenuOpcoesLoginCadastroContent>
          <span>|</span>
          <MenuOpcoesLoginCadastroContent id="menu-opcoes-login-cadastro--content">
            Cadastrar
          </MenuOpcoesLoginCadastroContent>
        </MenuOpcoesLoginCadastroContainer>

        <MenuListContainer id="menu-list--container">
          <MenuListContent id="menu-list--content">
            <MenuListContentLink id="menu-list--content_link">
              <MenuListTextContent id="menu-list--content">
                Sapatos
              </MenuListTextContent>
            </MenuListContentLink>
            <MenuListContentLink id="menu-list--content_link">
              <MenuListTextContent id="menu-list--content">
                Bolsas
              </MenuListTextContent>
            </MenuListContentLink>
            <MenuListContentLink id="menu-list--content_link">
              <MenuListTextContent id="menu-list--content">
                Acessórios
              </MenuListTextContent>
            </MenuListContentLink>
            <MenuListContentLink id="menu-list--content_link">
              <MenuListTextContent id="menu-list--content">
                Off
              </MenuListTextContent>
            </MenuListContentLink>
          </MenuListContent>
        </MenuListContainer>

        <BuscaBagContainer id="busca-bag--container">
          <Busca />
          <Bag value={value} setValue={setValue} />
        </BuscaBagContainer>
      </MenuContent>
    </MenuContainer>
  );
};

export default Menu;
