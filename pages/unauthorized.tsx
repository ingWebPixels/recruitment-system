import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

const UnauthorizedPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div> Cargando... </div>;
  }

  return (
    <div>
      {status === 'unauthenticated' && (
        <button
          type='button'
          className='primary'
          onClick={() => signIn('auth0')}
        >
          Iniciar sesión
        </button>
      )}

      {status === 'authenticated' && (
        <button type='button' className='primary' onClick={() => signOut()}>
          Cerrar sesión
        </button>
      )}

      <p>Usted no está autorizado para acceder al recurso solicitad.</p>
    </div>
  );
};

export default UnauthorizedPage;
