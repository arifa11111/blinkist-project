import { makeStyles } from '@mui/styles';
import React from 'react';
import Text from '../../atoms/text';
const ReadAgain = () => {
  const useStyles = makeStyles({
    root: {
      width: '284px',
      textAlign: 'center',
      paddingTop: '16px',
    },
    flex: { display: 'flex', width: '283px', paddingTop: '16px' },
    first: {
      width: '100%',
      height: '15px',
      backgroundColor: '#E1ECFC',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Text
        variant={'body1'}
        text={'Read again'}
        height={'16px'}
        color="#0365F2"
        width="283px"
      ></Text>
      <div className={classes.flex}>
        <div className={classes.first}></div>
      </div>
    </div>
  );
};
export default ReadAgain;
