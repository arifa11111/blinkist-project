/* eslint-disable react/jsx-no-duplicate-props */
import { makeStyles } from '@mui/styles';
import BookCard from '../../molecules/bookCard/index';
import Box from '@mui/material/Box';
import Text from '../../atoms/text/index';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Search from '@mui/icons-material/Search';
import Banner from '../../molecules/banner';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const useStyles = makeStyles({
  root: { width: '920px' },
  parent: { display: 'flex', justifyContent: 'center' },
  currently: {
    paddingTop: '60px',
    paddingBottom: '60px',
    position: 'relative',
    paddingleft: '0px',
  },
  buttonStyle: { width: '284px' },
  text: {
    paddingTop: '80px',
    paddingBottom: '25px',
    fontWeight: 700,
  },
  search: { width: '658px', paddingTop: '61px' },
});

const EntrepreneurOrganism = (props: { book: any; setData: any }) => {
  const [input, setInput] = useState('');
 

  const classes = useStyles();
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    setInput(val);
  };
  const clickHandler = (d: any) => {
    navigate('/enterpreuner/bookdetails', { state: d.id });
  };
  
  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <Banner></Banner>
        <div className={classes.search} data-testid="form">
          <FormControl variant="standard">
            <Input
              sx={{ width: '658px' }}
              placeholder="Search by title or author"
              value={input}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        {input === '' ? (
          <div>
            <div className={classes.text}>
              <Text
                variant={'caption'}
                text={'Trending blinks'}
                height={'24px'}
              ></Text>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {props.book &&
                  props.book
                    .filter((d: any) => !d.just && !d.audio)
                    .map((d: any) => (
                      <Grid
                        onClick ={() => d.startedread ? '' :clickHandler(d) }
                        data-testid="grid"
                        item
                        xs={2}
                        sm={4}
                        md={4}
                        key={d.id}
                        className={classes.root}
                      >
                            <BookCard
                              mode={d.startedread ? 'normal' : 'non-hover'}
                              bookName={d.cardName}
                              authorName={d.authorName}
                              src={d.src}
                              time={d.timeStamp}
                              read={d.reads}
                              status={d.isread}
                            />   
                      </Grid>
                    ))}
              </Grid>
              <>
              <div className={classes.text}>
              <Text
                variant={'caption'}
                text={'Just added'}
                height={'24px'}
              />
              </div>
              </>
              
              <Grid container spacing={2}>
                {props.book &&
                  props.book
                    .filter((d: any) => d.just)
                    .map((d: any) => (
                      <Grid
                        onClick={() => d.startedread ? '' :clickHandler(d)}
                        data-testid="grid"
                        item
                        xs={2}
                        sm={4}
                        md={4}
                        key={d.id}
                        className={classes.root}
                      >
                        
                            <BookCard
                              mode={d.startedread ? 'normal' : 'non-hover'}
                              bookName={d.cardName}
                              authorName={d.authorName}
                              src={d.src}
                              time={d.timeStamp}
                              read={d.reads}
                              status={d.isread}
                            />
                          
                        
                      </Grid>
                    ))}
              </Grid>
              <div className={classes.text}>
              <Text
                variant={'caption'}
                text={'Featured audio blinks'}
                height={'24px'}
              /></div>
              <br />
              <Grid container spacing={2}>
                {props.book &&
                  props.book
                    .filter((d: any) => d.audio)
                    .map((d: any) => (
                      <Grid
                        data-testid="grid"
                        onClick={() => d.startedread ? '' :clickHandler(d)}
                        item
                        xs={2}
                        sm={4}
                        md={4}
                        key={d.id}
                        className={classes.root}
                      >
                            <BookCard
                              mode={d.startedread ? 'normal' : 'non-hover'}
                              bookName={d.cardName}
                              authorName={d.authorName}
                              src={d.src}
                              time={d.timeStamp}
                              read={d.reads}
                              status={d.isread}
                            />
                         
                         

                      </Grid>
                    ))}
              </Grid>
            </Box>
          </div>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} data-testid="grid1">
              {props.book &&
                props.book
                  .filter(
                    (d: any) =>
                      d.authorName.toLowerCase().includes(input) ||
                      d.cardName.toLowerCase().includes(input),
                  )
                  .map((d: any) => (
                    <Grid
                      item
                      onClick={() => d.startedread ? '' :clickHandler(d)}
                      xs={2}
                      sm={4}
                      md={4}
                      key={d.id}
                      className={classes.root}
                    >  
                        <BookCard
                          mode={d.startedread ? 'normal' : 'non-hover'}
                          bookName={d.cardName}
                          authorName={d.authorName}
                          src={d.src}
                          time={d.timeStamp}
                          read={d.reads}
                          status={d.isread}
                        />
                    
                      
                    </Grid>
                  ))}
            </Grid>
          </Box>
        )}
      </div>
    </div>
  );
};
export default EntrepreneurOrganism;
