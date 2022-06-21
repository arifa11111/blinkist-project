import { makeStyles } from '@mui/styles';
import React from 'react';
import Image from '../../atoms/images';
import Text from '../../atoms/text';

const useStyles = makeStyles({
  text: {
    display: 'flex',
    flexDirection: 'column',
    height: '280px',
    width: '520px',
  },
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: '60px',
  },
});
const Details = (props: {
  book: any;
  setData: any;
  src: string;
  bookName: string;
  authorName: string;
  timeStamp: string;
}) => {
  const [,src2] = props.src.split('/');
  const [src3] = src2.split('.');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <div style={{ paddingBottom: '40px' }}>
          <Text
            variant={'body1'}
            text={'Get the key ideas from'}
            height={'16px'}
            color="#03314B"
          ></Text>
        </div>
        <div style={{ paddingBottom: '24px' }}>
          <Text
            variant={'h1'}
            text={props.bookName}
            height={'36px'}
            color="#03314B"
          ></Text>
        </div>
        <div style={{ paddingBottom: '24px' }}>
          <Text
            variant={'h2'}
            text={
              'Turning Your Business into an Enduring Great Company'
            }
            height={'20px'}
            color="#03314B"
            width="520px"
          ></Text>
        </div>
        <div style={{ paddingBottom: '19px' }}>
          <Text
            variant={'body1'}
            text={props.authorName}
            height={'15px'}
            color="#6D787E"
            width="520px"
          ></Text>
        </div>
        <Text
          variant={'body1'}
          text={props.timeStamp}
          height={'14px'}
          color="#6D787E"
        ></Text>
      </div>

      <div style={{ paddingTop: '40px' }}>
      <Image
          src={`/assets/${src3}.png`}
          height={304}
          width={304}
        ></Image>
      </div>
    </div>
  );
};
export default Details;
