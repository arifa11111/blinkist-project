import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { Dropdown } from '../../atoms/icons/index.stories';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div style={{'paddingRight':'25px'}}>
    <Button variant="text" onClick={loginWithRedirect} color="inherit" style={{'fontSize':'17px','textTransform' : 'capitalize' }} >
      Account 
    </Button>
    <Dropdown height='14px' width='12.61px' src='https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png'/>
    </div>
  );
};

export default LoginButton;
