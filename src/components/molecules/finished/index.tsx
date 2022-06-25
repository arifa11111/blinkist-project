import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import Text from '../../atoms/text';
const Finished = () => {
  const useStyles = makeStyles({
    root: {
      width: '285px',
      textAlign: 'center',
      bottom:'4px'
      
    },
    flex: { 
      display: 'flex', width: '285px', 
      paddingTop: '6px',
      
      
   },
    first: {
      width: '88px',
      height: '15px',
      backgroundColor: '#E1ECFC',
      borderBottomLeftRadius: '8px',
    },
    second: {
      width: '195px',
      height: '15px',
      backgroundColor: '#F1F6F4',
      borderBottomRightRadius: '8px',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button style={{'width':'100px'}}>
          <Text
            variant={'cardbtn'}
            text={'Finished'}
            height={'16px'}
            color="#0365F2"
            width="283px"
          ></Text>
      </Button>
      <div className={classes.flex}>
        <div className={classes.first}></div>
        <div className={classes.second}></div>
      </div>
    </div>
  );
};
export default Finished;
