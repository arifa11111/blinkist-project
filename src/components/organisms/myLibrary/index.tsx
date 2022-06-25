import { makeStyles } from '@mui/styles';
import BookCard from '../../molecules/bookCard/index';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import Text from '../../atoms/text/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../atoms/typography/typography.css'

const useStyles = makeStyles({
  root: { width: '920px' },

  parent: { display: 'flex', justifyContent: 'center' },

  currently: {
    paddingTop: '60px',
    paddingBottom: '60px',
    position: 'relative',
    paddingleft: '0px',
  },

  buttonStyle: {
    backgroundColor:'transparent',
    width: '284px',
    '&:hover':{
      backgroundColor:'transparent',
    }
  },

  text: {
    paddingLeft: '0px',
    paddingTop: '50px',
  },

  line: {
    width: '305px',
    height: '2px',
    border:'2px',

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
  startedBook:boolean;
  startedread:boolean;
};

const MyLibraryTemplate = (props: { book: data[]; setData: any }) => {
  const classes = useStyles();
  const [currently, setCurrently] = useState(true);
  const [finished, setFinish] = useState(false);
  let style2;
  if (currently) {
    style2 = {
      color: '#6D787E',
      fontWeight: 100,
    };
  } else {
    style2 = {
      color: '#22C870',
    };
  }
  const navigate = useNavigate();
  const handleCLick = (d: any) => {
    navigate('/enterpreuner/bookdetails', {state: d.id,});
  };

  const gridFunction = (mode: string, d: any) => {
    return (
      <Grid
        item
        xs={2}
        sm={4}
        md={4}
        key={d.id}
        className={classes.root}
      >
        <div onClick={() => handleCLick(d)} data-testid="grid">
          <BookCard
            mode={mode}
            bookName={d.cardName}
            authorName={d.authorName}
            src={d.src}
            time={d.timeStamp}
            read={d.reads}
            status={d.isread}
          />
        </div>
      </Grid>
    );
  };
  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <div className={classes.text}>
          <Text
            variant={'h1'}
            text={'My Library'}
            height={'36px'}
            color="#03314B"
          />
        </div>
        <div className={classes.currently}>
          <Button
            className={classes.buttonStyle}
            variant="text"
            onClick={() => {
              setCurrently(true);
              setFinish(false);
            }}
          >
            <div 
              style={{  paddingRight: '120px' }}
            >
              {currently ? (
                <Text
                  variant={'subtitle1Green'}
                  text={'Currently Reading'}
                  height={'18px'}
                />
              ) : (
                <Text
                  variant={'subtitle2'}
                  text={'Currently Reading'}
                  height={'18px'}
                />
              )}
            </div>
          </Button>

          <Button
            className={classes.buttonStyle}
            variant="text"
            onClick={() => {
              setCurrently(false);
              setFinish(true);
            }}
            style={style2}
          >
            <div 
              style={{paddingRight: '160px' }}
            >
            {finished ? (
              <Text
                variant={'subtitle1Green'}
                text={'Finished '}
                height={'18px'}
              />
            ) : (
              <Text
                variant={'subtitle2'}
                text={'Finished '}
                height={'18px'}
              />
            )}
            </div>
          </Button>
          <div className={classes.parent}>
            <hr
              className={classes.line}
              style={
                currently
                  ? { backgroundColor: '#2CE080' }
                  : { backgroundColor: '#e1ecfc' }
              }
            ></hr>
            <hr
              className={classes.line}
              style={
                finished
                  ? { backgroundColor: '#2CE080' }
                  : { backgroundColor: '#e1ecfc' }
              }
            ></hr>
            <hr
              className={classes.line}
              style={{ backgroundColor: '#F1F6F4' }}
            ></hr>
          </div>
        </div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {props.book &&
              // eslint-disable-next-line array-callback-return
              props.book.map((d: any) => {
               if (d.status)  {
                  return currently && gridFunction('finished', d);
                } 
                if (!d.status && d.startedread) {
                  return finished && gridFunction('read again', d);
                }
              })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};
export default MyLibraryTemplate;
