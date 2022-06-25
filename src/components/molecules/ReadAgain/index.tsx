import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Text from '../../atoms/text';
const ReadAgain = () => {
  const useStyles = makeStyles({
    root: {
      width: '284px',
      textAlign: 'center',
      bottom:'6px',
    },
    flex: { display: 'flex', width: '282px',paddingTop:'6px'},
    first: {
      width: '100%',
      height: '15px',
      backgroundColor: '#DFE8F6',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button style={{'width':'100px'}}>
          <Text
            variant={'cardbtn'}
            text={'Read again'}
            height={'16px'}
            color="#0365F2"
            width="283px"
          ></Text>
      </Button>
        <div className={classes.flex}>
        <div className={classes.first}>

        </div>
      </div>
      </div>
  );
};
export default ReadAgain;
