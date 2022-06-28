import { makeStyles } from '@mui/styles';
import Image from '../../atoms/images';
import Text from '../../atoms/text';
const Footer = () => {
  const useStyles = makeStyles({
    flex: {
      display: 'flex',
      justifyContent: 'normal',
      alignContent: 'flex-start',
      paddingLeft:'200px',
    },
    body: {
      backgroundColor: '#F1F6F4',
      height: '370px',
      width: '1440px',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'center',
      paddingTop:'20px',
    },
    body1: {
      color: 'solid black',
      paddingTop: '38px',
      fontWeight: 700,
      paddingRight:'40px',
    },
    bottom: {
      color: 'solid black',
      paddingTop: '38px',
      fontWeight: 700,
    },
    gamma: {
      whiteSpace:'break-spaces',
      fontFamily:'Cera Pro',
      fontStyle:'normal',
      fontWeight:'400',
      paddingLeft: '225px',
      color : '#6D787E',
      fontSize:'14px',
      lineHeight:'22px',
      width:'546px',
      height:'22px',
      justifyContent:'space-evenly',
    },
    parent: {
      display: 'flex',
      justifyContent: 'center',
      zIndex:'-1',
      backgroundColor: '#F1F6F4',
      bottom:'0px',
      marginTop:'100px',
      position:'sticky',
      top:'100px',
      transform:'translateY(110px)',
      
    },
  });
  const text = (data: string[], variant: string) => {
    if (variant === 'subtitle3Blue') {
      return (
        <div>
          <Text variant={'subtitle3Blue'} text={data[0]}></Text>
          <Text variant={'subtitle3Blue'} text={data[1]}></Text>
        </div>
      );
    }
    if (variant === 'body1') {
      return (
        <div>
          <Text variant={'body3'} text={data[0]}></Text>
          <br />
          <Text variant={'body1'} text={data[1]}></Text>
          <Text variant={'body1'} text={data[2]}></Text>
          <Text variant={'body1'} text={data[3]}></Text>
          <Text variant={'body1'} text={data[4]}></Text>
          <Text variant={'body1'} text={data[5]}></Text>
        </div>
      );
    }
  
  };
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.body}>
        <div className={classes.flex}>
          <div style={{'paddingRight':'200px','paddingLeft':'30px','bottom':'15px'}}>
            <Image
              src="../../../../logo.png"
              height={80}
              width={124.09}
            ></Image>
            {text(
              ['Big ideas in small packages', 'Start learning now'],
              'subtitle3Blue',
            )}
          </div>
          <div >
            <div className={classes.body1}>
              {text(
                [
                  'Editorial',
                  'Book lists',
                  'What is Nonfiction?',
                  'What to read next?',
                  'Benefits of reading',
                  '',
                ],
                'body1',
              )}
            </div>
          </div>
          <div style={{'paddingLeft':'60px'}}> 
            <div className={classes.body1}>
              {text(
                [
                  'Useful links',
                  'Pricing',
                  'Blinkist business',
                  'Gift cards',
                  'Blinkist magaine',
                  'Contact & help',
                ],
                'body1',
              )}
            </div>
          </div>
          <div style={{'paddingLeft':'10px'}}>
            <div className={classes.body1}>
              {text(
                [
                  'Company',
                  'About',
                  'Careers',
                  'partners',
                  'Code of Conduct',
                  '',
                ],
                'body1',
              )}
            </div>
          </div>
        </div>
        <div className={classes.gamma}>
          
        © Blinkist 2021 Sitemap    |    Imprint    |    Terms of Service    |    Privacy Policies

        </div>
      </div>
    </div>
  );
};
export default Footer;
