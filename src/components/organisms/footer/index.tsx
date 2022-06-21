import { makeStyles } from '@mui/styles';
import Image from '../../atoms/images';
import Text from '../../atoms/text';
const Footer = () => {
  const useStyles = makeStyles({
    flex: {
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'flex-start',
    },
    body: {
      backgroundColor: '#F1F6F4',
      height: '370px',
      width: '950px',
      paddingTop: '38px',
    },
    body1: {
      color: 'solid black',
      paddingTop: '38px',
      fontWeight: 700,
    },
    bottom: {
      color: 'solid black',
      paddingTop: '38px',
      fontWeight: 700,
    },
    gamma: {
      paddingTop: '48px',
      paddingLeft: '50px',
      color: 'pink', //'#6D787E',
    },
    parent: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#F1F6F4',
      marginTop: '50px',
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
          <Text variant={'body1'} text={data[0]}></Text>
          <br />
          <Text variant={'body3'} text={data[1]}></Text>
          <Text variant={'body3'} text={data[2]}></Text>
          <Text variant={'body3'} text={data[3]}></Text>
          <Text variant={'body3'} text={data[4]}></Text>
          <Text variant={'body3'} text={data[5]}></Text>
        </div>
      );
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.body}>
        <div className={classes.flex}>
          <div>
            <Image
              src="../../../../logo.png"
              height={100}
              width={124.09}
            ></Image>
            {text(
              ['Big ideas in small packages', 'Start learning now'],
              'subtitle3Blue',
            )}
          </div>
          <div>
            <div className={classes.body1}>
              {text(
                [
                  'Editorial',
                  'Book Lists',
                  'What is Nonfiction?',
                  'What to read next?',
                  'Benefits of reading',
                  '',
                ],
                'body1',
              )}
            </div>
          </div>
          <div>
            <div className={classes.body1}>
              {text(
                [
                  'Useful links',
                  'Pricing',
                  'Blinkist Business',
                  'Gift cards',
                  'Blinkist maganine',
                  'Contact & help',
                ],
                'body1',
              )}
            </div>
          </div>
          <div>
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
          {text(
            [
              '© Blinkist 2021 Sitemap  |   Imprint   |   Terms of Service   |   Privacy Policies',
            ],
            'body1',
          )}
        </div>
      </div>
    </div>
  );
};
export default Footer;
