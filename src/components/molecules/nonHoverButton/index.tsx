import { Button } from '@material-ui/core';
import { Add } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import React from 'react';


const NonHoverLib = () => {
  const useStyles = makeStyles({
    root: {
      height: '50px',
      width: '281px',
      border: '1px  solid #E1ECFC',
      textAlign: 'center',
      marginTop: '7px',
      borderBottomRightRadius: '8px',
      borderBottomLeftRadius: '8px',
      
    },
    buttonStyle: {
      height: '52px',
      width: '281px',
      padding: '14px 24px',
      fontSize: '18px',
      color: '#0365F2',
      borderBottomRightRadius: '8px',
      borderBottomLeftRadius: '8px',
     
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#0365F2',
        color: 'white',
        width:'282px',
        borderTopLeftRadius:'none',
        borderTopRightRadius:'none',
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
