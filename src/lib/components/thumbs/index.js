import React from 'react';
import { Container, Content, Seta } from './styled';
import { ThumbImage } from './images';

import { Video } from './video';

import { IconArrowTop, IconArrowDown } from '../../../assets/icons/setas';

const Thumbs = () => {
  return (
    <Container>
      <Video
        src={'https://www.youtube.com/watch?v=TEzqeb719pk'}
        width={'96px'}
        height={'82px'}
      />
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
