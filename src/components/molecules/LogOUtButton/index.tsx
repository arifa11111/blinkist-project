import React from 'react';
import { Button } from '@mui/material';
import Text from '../../atoms/text';
type Props = {
  logout: any;
  isauth: Boolean;
};
const LogOutButton = (props: Props) => {
  return (
    props.isauth && (
      <Button variant="text" onClick={props.logout}>
        <Text variant={'body3'} text={'Log Out'}></Text>
      </Button>
    )
  );
};

export default LogOutButton;
