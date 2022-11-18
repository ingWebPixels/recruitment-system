import React from 'react';

const UnauthorizedPage = () => (
  <div>Usted no está autorizado para acceder al recurso solicitado. <button onClick={() => loginWithRedirect()}>Log In</button> </div>

);

export default UnauthorizedPage;
