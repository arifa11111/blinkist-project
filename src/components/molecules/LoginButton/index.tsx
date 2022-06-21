import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import {  ArrowDropDownOutlined } from '@mui/icons-material';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="text" onClick={loginWithRedirect} color="inherit" endIcon={<ArrowDropDownOutlined/>}>
      Account
    </Button>
  );
};

export default LoginButton;
