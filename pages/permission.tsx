import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Enum_RoleName } from '@prisma/client';
import PrivateComponent from '@components/PrivateComponent';
import Header from "@components/Header";

const PermissionPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (status === 'loading') {
    return <div> Cargando... </div>;
  }

  return (
    <div>
      <Header />

      <PrivateComponent roleList={[Enum_RoleName.ADMIN]}>
        <div>Esto solo lo ve un administrador </div>
      </PrivateComponent>

      <PrivateComponent roleList={[Enum_RoleName.CANDIDATE]}>
        <div>Esto solo lo ve un Candidato </div>
      </PrivateComponent>

    </div>
  );
};

export default PermissionPage;
