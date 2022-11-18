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
    <span>Home</span>
    <Link href='/permission'>
      <a>Permissions</a>
    </Link>
    <Link href='/profile'>
      <a>My Profile</a>
    </Link>
    <Link href='/admin'>
      <a>Go Administrator</a>
    </Link>
  </div>
);

export default IndexPage;
