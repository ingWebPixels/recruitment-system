import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const handleSignIn = (e: any) => {
    e.preventDefault();
    signIn("auth0");
  };
  const handleSignOut = (e: any) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div className="navbar text-white bg-gray-800">
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl font-bold">PIXELS</a>
      </div>
      <div className="navbar-end justify-end w-full">
        {session && (
          <button
            type="button"
            onClick={handleSignOut}
            className="btn text-white"
          >
            Cerrar sesión
          </button>
        )}
        {!session && (
          <button
            type="button"
            onClick={handleSignIn}
            className="btn text-white"
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
