import { Button } from '@material-ui/core';
import { Add } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import React from 'react';


const NonHoverLib = () => {
  const useStyles = makeStyles({
    root: {
      height: '52px',
      width: '284px',
      border: '1px  solid #E1ECFC',
      textAlign: 'center',
      marginTop: '19px',
    },
    buttonStyle: {
      height: '52px',
      width: '284px',
      padding: '14px 24px',
      fontSize: '18px',
      color: '#0365F2',

      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#0365F2',
        color: 'white',
      },
    },
  });
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Button
        
        className={classes.buttonStyle}
        variant="text"
        startIcon={<Add></Add>}
      >
        Add to library
      </Button>
    </div>
  );
};
export default NonHoverLib;
