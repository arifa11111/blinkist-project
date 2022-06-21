import React from 'react';

type MyProps = { src: string; height: string; width: string };
const Icons = (props: MyProps) => {
  return (
    <img
      src={props.src}
      height={props.height}
      width={props.width}
      alt="icons"
    />
  );
};
export default Icons;
