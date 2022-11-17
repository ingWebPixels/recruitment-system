import { matchRoles } from '@utils/matchRoles';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React from 'react';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { roleCheck, isPublic, name } = await matchRoles({ context });

  if (isPublic) {
    return {
      props: {
        name,
      },
    };
  }

  if (!roleCheck) {
    return {
      redirect: {
        destination: '/unauthorized',
        permanent: false,
      },
    };
  }

  return {
    props: {
      name,
    },
  };
}

const IndexPage = () => (
  <div className='flex flex-col'>
    <span>Esto es una pagina publica</span>
    <Link href='/transactions'>
      <a>Ir a la pagina de transacciones</a>
    </Link>
    <Link href='/admin'>
      <a>Ir a la pagina de admin</a>
    </Link>
  </div>
);

export default IndexPage;
