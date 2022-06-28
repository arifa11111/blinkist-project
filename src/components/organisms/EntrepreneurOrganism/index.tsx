/* eslint-disable react/jsx-no-duplicate-props */
import { makeStyles } from '@mui/styles';
import BookCard from '../../molecules/bookCard/index';
import Box from '@mui/material/Box';
import Text from '../../atoms/text/index';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SvgIcon from '@mui/material/SvgIcon';
import Banner from '../../molecules/banner';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const useStyles = makeStyles({
  root: { 
          width: '920px' ,
          borderTopRightRadius:'8px',
          borderTopLeftRadius:'8px',
        },
    
  parent: { display: 'flex', justifyContent: 'center' },
  currently: {
    paddingTop: '60px',
    paddingBottom: '60px',
    position: 'relative',
    paddingleft: '0px',
  },
  buttonStyle: { width: '284px' },
  text: {
    paddingTop: '60px',
    paddingBottom: '25px',
    fontWeight: 700,
  },
  text2: {
    paddingTop: '60px',
    paddingBottom: '5px',
    fontWeight: 700,
  },
  search: { 
    width: '658px', 
    paddingTop: '40px' , 
  },
  
  
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
                    sx={{ width: '658px' ,
                          borderBottom:' 1px solid #6d787e',
                          tabSize:'10px',
                          fontFamily:'Cera Pro',
                          fontWeight:700,
                          fontSize:'24px',
                        }}
                    placeholder="Search by title or author"
                    value={input}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <SvgIcon style={{width:'30px',height:'30px',paddingRight:'12px',paddingBottom:'3px'}}><path d="M17.4752 16.195L21.353 20.0719L20.0719 21.353L16.195 17.4752C14.7525 18.6316 12.9583 19.2606 11.1095 19.2579C6.61151 19.2579 2.961 15.6074 2.961 11.1095C2.961 6.61151 6.61151 2.961 11.1095 2.961C15.6074 2.961 19.2579 6.61151 19.2579 11.1095C19.2606 12.9583 18.6316 14.7525 17.4752 16.195ZM15.659 15.5232C16.8081 14.3416 17.4498 12.7577 17.4472 11.1095C17.4472 7.60744 14.6106 4.77177 11.1095 4.77177C7.60744 4.77177 4.77177 7.60744 4.77177 11.1095C4.77177 14.6106 7.60744 17.4472 11.1095 17.4472C12.7577 17.4498 14.3416 16.8081 15.5232 15.659L15.659 15.5232V15.5232Z" fill="#042330"/></SvgIcon>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
        {input === '' ? (
          <div>
            <div className={classes.text}>
              <Text
                variant={'caption51'}
                text={'Trending blinks'}
                height={'24px'}
              ></Text>
            </div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {props.book &&
                  props.book
                    .filter((d: any) => d.id<=3 )
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
              <div className={classes.text2}>
              <Text
                variant={'caption5'}
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
