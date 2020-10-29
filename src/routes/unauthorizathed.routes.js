import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PageProduto } from '../pages';

const UnauthorizathedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/produto" component={PageProduto} />
      <Redirect path="/produto" />
    </Switch>
  );
};

export default UnauthorizathedRoutes;
