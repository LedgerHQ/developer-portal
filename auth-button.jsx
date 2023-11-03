import { signIn, signOut, useSession } from 'next-auth/react'

const AuthButton = () => {
  const { data: session } = useSession()

  const handleAuthentication = () => {
    if (session) {
      // If the user is authenticated, log them out
      signOut({ callbackUrl: '/' });
    } else {
      // If the user is not authenticated, log them in
      signIn();
    }
  };

  return (
    <button onClick={handleAuthentication}>
      {session ? 'Logout' : ''}
    </button>
  );
};

export default AuthButton;
