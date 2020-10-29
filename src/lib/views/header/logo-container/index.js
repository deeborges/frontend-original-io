import React from 'react';
import { Container, Content, Logo } from './styled';
import { LogoOriginal } from '../../../../assets/images';

const LogoContainer = () => {
  return (
    <Container>
      <Content>
        <Logo src={LogoOriginal} />
      </Content>
    </Container>
  );
};

export default LogoContainer;
