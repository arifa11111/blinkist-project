import React from 'react';
type MyProps = {
  src: string;
  height: number;
  width: number;
};
const Image = (props: MyProps) => {
  const styles = {
    height: props.height,
    width: props.width,
  };
  return (
    <img src={props.src} style={styles} alt="blinkist logo"></img>
  );
};
export default Image;
