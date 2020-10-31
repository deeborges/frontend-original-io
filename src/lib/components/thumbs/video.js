import styled from 'styled-components';

export const VideoCirclePlay = styled.img`
  position: relative;
`;

export const Video = styled.iframe`
  height: ${(props) => props.height};
  position: relative;
  width: ${(props) => props.width};
`;
