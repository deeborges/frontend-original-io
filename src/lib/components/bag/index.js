import React from 'react';
import { BagContainer, BagImage, BagValue } from './styled';
import { IconCart } from '../../../assets/icons/header';

const Bag = ({ value }) => {
  return (
    <BagContainer id="bag">
      <BagImage src={IconCart} />
      <BagValue>{value}</BagValue>
    </BagContainer>
  );
};

export default Bag;
