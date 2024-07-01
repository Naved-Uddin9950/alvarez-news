import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function Auth() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      }
    </div>
  )
}

export default Auth