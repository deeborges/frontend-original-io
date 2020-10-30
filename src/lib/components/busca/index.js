import React from 'react';
import { BuscaContainer, IconeBusca, InputBusca, InputLink } from './styled';
import { IconLupa } from '../../../assets/icons/header';

const Busca = () => {
  return (
    <BuscaContainer id="busca">
      <InputLink>
        <IconeBusca src={IconLupa} />
      </InputLink>
      <InputBusca placeholder={'Busca'} width={'50%'} />
    </BuscaContainer>
  );
};

export default Busca;
