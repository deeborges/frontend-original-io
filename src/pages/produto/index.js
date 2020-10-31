import React from 'react';
import HeaderLogoContainer from '../../lib/views/header/logo-container';
import HeaderMenu from '../../lib/views/header/menu';

import Breadcrumb from '../../lib/components/breadcrumb';
import Thumbs from '../../lib/components/thumbs';

export const PageProduto = () => {
  return (
    <div>
      <HeaderLogoContainer />
      <HeaderMenu />
      <Breadcrumb />
      <Thumbs />
    </div>
  );
};
