import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Enum_RoleName } from '@prisma/client';
import PrivateComponent from '@components/PrivateComponent';
import Header from "@components/Header";

const PermissionPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div> Cargando... </div>;
  }

  return (
    <div>
      <Header />

      <p>Hola: {session?.user.name} </p>
    </div>
  );
};

export default PermissionPage;
