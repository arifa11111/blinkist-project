import { makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Normal = () => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '4px',
      width: '285px',
    },
    flex: { display: 'flex',paddingBottom:'15px' },
    first: {
      width: '88px',
      height: '15px',
      backgroundColor: '#E1ECFC',
      borderBottomLeftRadius: '8px',
    },
    second: {
      width: '194px',
      height: '15px',
      backgroundColor: '#F1F6F4',
      borderBottomRightRadius: '8px',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MoreHorizIcon
        sx={{ paddingLeft: '247px', color: '#042330' ,
             width:'20',
              PaddingTop:'20px',
            }}
      ></MoreHorizIcon>

      <LinearProgress
        value={30}
        sx={{
          marginTop: '8px',
          height: '15px',
          overflow: 'unset',
          position: 'relative',
          left: '20px',
          backgroundColor: '#F1F6F4',
        }}
        variant="indeterminate"
      />
      <div className={classes.flex}>
        <div className={classes.first}></div>
        <div className={classes.second}></div>
      </div>
    </div>
  );
};
export default Normal;
