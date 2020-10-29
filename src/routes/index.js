import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UnauthorizedRoutes from './unauthorizathed.routes';

const Routes = () => {
  return (
    <Router>
      <UnauthorizedRoutes />
    </Router>
  );
};

export default Routes;
