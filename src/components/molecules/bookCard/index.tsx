import React from 'react';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Text from '../../atoms/text/index';
import NonHoverLib from '../nonHoverButton/index';
import Normal from '../normalCardBottom/index';
import Finished from '../finished/index';
import ReadAgain from '../ReadAgain/index';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
type MyProps = {
  mode: string;
  bookName: string;
  authorName: string;
  src: string;
  time: string;
  read: string;
  status: boolean;
};
const useStyles = makeStyles({
  book: {
    height: '23px',
    paddingTop: '23px',
    paddingLeft: '16px',
    color: '#03314B',
    fontWeight: 700,
  },
  author: {
    height: '20px',
    paddingTop: '16px',
    paddingLeft: '16px',
    color: '#6D787E',
  },
  time: {
    height: '18px',
    paddingTop: '18px',
    color: '#6D787E',
    display: 'flex',
    
  },
  root: {
    border: '1px  solid',
    borderBottom:'none',
    borderTop:'none',
    borderColor: '#E1ECFC',
    width: '281px',
    height: '466px',
    borderRadius: '8px', 
    '&:hover':{
      backgroundColor:'#f1f6f4',
    }
  },

    img:{
      borderTopRightRadius: '8px',
      borderTopLeftRadius: '8px',
    
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
const Card = (props: MyProps) => {
  const classes = useStyles();
  let bottom;
  if (props.mode === 'normal') {
    bottom = <Normal></Normal>;
  }
  if (props.mode === 'finished') {
    bottom = <Finished></Finished>;
  }
  if (props.mode === 'read again') {
    bottom = <ReadAgain></ReadAgain>;
  }
  if (props.mode === 'non-hover' ) {
    bottom = <NonHoverLib></NonHoverLib>;
  }
  let readStatus = <div></div>;
  if (props.status) {
    readStatus = (
      <>
        <PersonOutlineOutlinedIcon
          sx={{
            paddingLeft: '17.67px',
            height: '16px',
            width: '16px',
          }}
        />
        <Text variant="caption" text={props.read} height={'13px'} />
      </>
    );
  }
  return (
    <div className={classes.root}>
      <div >
          <img className={classes.img} src={props.src} alt="book_image"></img>
      </div>    
      <div>
        <div className={classes.book}>
          <Text
            variant="cardh1"
            text={props.bookName}
            height={'18px'}
            color="#03314B"
            width="225px"
          />
        </div>
        <div className={classes.author}>
          <Text
            variant="cardAuth"
            text={props.authorName}
            height={'15px'}
          />
        </div>
        <div className={classes.time}>
          <AccessTimeIcon
            sx={{
              paddingLeft: '17.67px',
              height: '16.67px',
              width: '16.67px',
              paddingRight:'4px',
            }}
          />
          
          <Text
            variant="caption3"
            text={props.time}
            height={'13px'}
          />
          {readStatus}
        </div>
        {bottom}
      </div>
      
    </div>
  );
};
export default Card;
