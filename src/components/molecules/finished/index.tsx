import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/text';
const Finished = () => {
  const useStyles = makeStyles({
    root: {
      width: '284px',
      textAlign: 'center',
      paddingTop: '16px',
    },
    flex: { display: 'flex', width: '283px', paddingTop: '16px' },
    first: {
      width: '30%',
      height: '15px',
      backgroundColor: '#E1ECFC',
    },
    second: {
      width: '70%',
      height: '15px',
      backgroundColor: '#F1F6F4',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button>
          <Text
            variant={'subtitle3Blue'}
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
