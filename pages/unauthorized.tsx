import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Enum_RoleName } from '@prisma/client';
import PrivateComponent from '@components/PrivateComponent';

const UnauthorizedPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

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

      <PrivateComponent roleList={[Enum_RoleName.ADMIN]}>
        <div>Esto solo lo ve un administrador </div>
      </PrivateComponent>

      <PrivateComponent roleList={[Enum_RoleName.CANDIDATE]}>
        <div>Esto solo lo ve un Candidato </div>
      </PrivateComponent>

      <p>Usted no está autorizado para acceder al recurso solicitad.</p>
    </div>
  );
};

export default UnauthorizedPage;
