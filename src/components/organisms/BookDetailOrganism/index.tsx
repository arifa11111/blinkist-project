import { Button } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import Details from '../../molecules/BookDetail';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from 'react';
import Text from '../../atoms/text';
import '../../atoms/typography/typography.css'

const useStyles = makeStyles({
  flexDiv: {
    width: '920px',
    display: 'flex',
    flexDirection: 'column',
    
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  tab:{
      transform:'translateY(-40px)',
  },
  buttonStyle: {
    width: '200px',
      justifyContent:'start',
      fontFamily: ' Cera Pro',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#6d787e',
      marginTop: '14px',
      textTransform: 'none',
  },

  onbutton:{
      width: '200px',
      justifyContent:'start',
      fontFamily: ' Cera Pro',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#03314b',
      marginTop: '14px',
      textTransform: 'none',
  },

  buttonStyle2: {
    width: '122px',
    textTransform:'none',
    height: '44px',
    bottom:'70px',
    margin: '5px',
    marginLeft:'5px',
    fontFamily:'Cera Pro',
    fontWeight:'500',
    border:'1px solid black',
    borderRadius: '5px',
    color:'#22C870',
    fontSize: '16px',
    '&:hover': {
      color: 'white',
      backgroundColor: '#22C870',
    },
  },
  kindle: {
    width: '200px',
    height: '44px',
    bottom:'70px',
    paddingLeft:'1px',
    textTransform:'none',
    fontFamily: ' Cera Pro',
    fontStyle: 'normal',
    fontWeight: '400',
    margin: '10px',
    left:'20px',
    borderRadius: '5px',
    color:'#6d787e',
    fontSize: '16px',
    '&:hover': {
      color: 'white',
      backgroundColor: '#22C870',
    },
  },
  
 
  finishedButton: {
    width: '180px',
    textTransform:'capitalize',
    fontFamily:'Cera Pro',
    fontWeight:'500',
    bottom:'70px',
    left:'20px',
    height: '44px',
    fontSize:'16px',
    '&.MuiButton-text': { backgroundColor: '#22C870' },
  },
  text: {
    paddingTop: '80px',
    paddingBottom: '25px',
    fontWeight: 700,
  },
  search: {
    width: '658px',
    paddingTop: '61px',
  },
});
type data = {
  src: string;
  cardName: string;
  authorName: string;
  timeStamp: string;
  id: number;
  isread: boolean;
  reads: string;
  status: boolean;
  startedread:boolean;
  startedBook:boolean;
};

const BookDetailOrganism = (props: {
  book: data[];
  setData: any;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const loc = location.state;
  let id = 0;

  props.book &&
    // eslint-disable-next-line array-callback-return
    props.book.map((d: any) => {
      if (d.id === loc) {
        id = d.id - 1;
      }
    });

  const classes = useStyles();
  let src1 = '',
    bookName = '',
    authorName = '',
    timeStamp = '';

  if (props.book[id]) {
    src1 = props.book[id].src;
    bookName = props.book[id].cardName;
    authorName = props.book[id].authorName;
    timeStamp = props.book[id].timeStamp;
  }
  const [button, setButton] = useState('synopsis');

  const handleFinish = () => {
    props.book[id].status = false;
    props.book[id].startedread = true;
    navigate('/')
  };
  const handleRead = () => {
    props.book[id].status = true;
    props.book[id].startedread = true;
    navigate('/')
  };
  const hrFunction = (color: string) => {
    return (
      
      <hr
        style={{
          width: '600px',
          border:'2px',
          height:'2px',
          transform:'translateY(-45px)',
          backgroundColor: color,
        }}
      ></hr>
      
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.flexDiv}>
        
      {src1
      &&
      (      
          <Details
            book={props.book}
            setData={props.setData}
            src={src1}
            bookName={bookName}
            authorName={authorName}
            timeStamp={timeStamp}
          ></Details>
  
        )}
        
        <div>
          <div >
            <Button
              className={classes.buttonStyle2}
              variant="outlined"
              onClick={handleRead}
              
            >
              Read now
            </Button>

            <Button
              className={classes.finishedButton}
              variant="text"
              onClick={handleFinish}
              
            >
                Finished Reading
              
            </Button>
            <Button
              className={classes.kindle}
              variant="text"
              endIcon={<ArrowForwardOutlinedIcon />}
              onClick={() => navigate('/enterpreuner')}
            >
              Send to Kindle
            </Button>
          </div>
          <div className={classes.tab}>
            <Button
              className={button === 'synopsis' ? classes.onbutton : classes.buttonStyle}
              variant="text"
              onClick={() => {
                setButton('synopsis');
              }}
            >
              Synopsis
            </Button>
            <Button
              className={ button === 'who' ? classes.onbutton : classes.buttonStyle}
              variant="text"
              onClick={() => {
                setButton('who');
              }}
            >
              Who is it for?
            </Button>
            <Button
              className={button === 'about' ? classes.onbutton : classes.buttonStyle}
              variant="text"
              onClick={() => {
                setButton('about');
              }}
            >
              About the author
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '600px',
            }}
          >
            {button === 'synopsis'
              ? hrFunction('#2CE080')
              : hrFunction('#E1ECFC')}
            {button === 'who'
              ? hrFunction('#2CE080')
              : hrFunction('#E1ECFC')}
            {button === 'about'
              ? hrFunction('#2CE080')
              : hrFunction('#E1ECFC')}
          </div>
          <div className={classes.tab}>
            {button === 'synopsis' ? (
              <Text
                variant={'body2'}
                text={
                  bookName +
                  '(2020) updates ' +
                  authorName +
                  '’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.'
                }
                height={'16px'}
                width="600px"
                color="#03314B"
              ></Text>
            ) : (
              <></>
            )}
            {button === 'who' ? (
              <Text
                variant={'body2'}
                text="any one who are interested in Entrepreneurship"
                height={'16px'}
                width="600px"
                color="#03314B"
              ></Text>
            ) : (
              <></>
            )}
            {button === 'about' ? (
              <Text
                variant={'body2'}
                text={authorName}
                height={'16px'}
                width="600px"
                color="#03314B"
              ></Text>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetailOrganism;
