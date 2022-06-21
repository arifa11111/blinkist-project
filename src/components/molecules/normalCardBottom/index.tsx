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
      height: '52px',
      width: '284px',
    },
    flex: { display: 'flex' },
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
      <MoreHorizIcon
        sx={{ paddingLeft: '247px', color: '#042330' }}
      ></MoreHorizIcon>

      <LinearProgress
        value={30}
        sx={{
          marginTop: '20px',
          height: '15px',
          overflow: 'unset',
          borderRadius: '0px 0px 8px 8px',
          width: '244px',
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
