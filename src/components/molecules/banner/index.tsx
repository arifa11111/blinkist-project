import { makeStyles } from '@mui/styles';
import React from 'react';
import Text from '../../atoms/text';
import Image from '../../atoms/images';
const useStyles = makeStyles({
  root: {
    width: '912px',
    height: '264px',
    backgroundColor: '#F1F6F4',
    paddingLeft: '60px',
    paddingTop: '45px',
    marginTop: '30px',
  },
  
  parent: { 
    display: 'flex',
    justifyContent: 'center',
    paddingRight:'7px',
  },

  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    marginTop: '30px',
  },
});
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <div className={classes.flexCol}>
          <Text
            variant={'h1'}
            text={'Explore Books on entrepreneurship'}
            height={'35px'}
            width="300px"
          ></Text>
          <div style={{ width: '500px', paddingTop: '15px' }}>
            <Text
              variant={'subtitle2'}
              text={
                ' Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.'
              }
              height={'18px'}
              width="430px"
            ></Text>
          </div>
        </div>
      </div>
      <div className={classes.image}>
        <Image
          src={'../../../../banner.png'}
          height={310}
          width={310}
        ></Image>
      </div>
    </div>
  );
};
export default Banner;
