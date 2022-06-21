import React from 'react';

import { makeStyles } from '@mui/styles';
import Typographys from '../typography/Typographys';

type MyProps = {
  variant: any;
  text: string;
  height?: string;
  width?: string;
  color?: string;
  hover?: string;
};
const Text = (props: MyProps) => {
  const useStyles = makeStyles({
    root: {
      fontSize: props.height,
      width: props.width,
      color: props.color,
      fontFamily: 'cursive',
    },
  });
  const classes = useStyles();
  return (
    <div id="text" className={classes.root}>
      <Typographys
        variant={props.variant}
        content={props.text}
      ></Typographys>
    </div>
  );
};
export default Text;
