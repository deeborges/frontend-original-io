import React from 'react';
import { Container, Content, Seta } from './styled';
import { ThumbImage } from './images';
import { IconArrowTop, IconArrowDown } from '../../../assets/icons/setas';

const Thumbs = () => {
  // const onClickSetaSubir = () => {
  //   window.pageXOffset = window.scrollTo({ top: 20, behavior: 'smooth' });

  //   console.log(window.pageXOffset);
  // };
  return (
    <Container>
      <Seta src={IconArrowTop} />
      <Content>
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
        <ThumbImage src={'https://imgur.com/vLT0BhC.png'} />
      </Content>
      <Seta src={IconArrowDown} />
    </Container>
  );
};

export default Thumbs;
