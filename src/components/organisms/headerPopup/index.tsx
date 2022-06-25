import { makeStyles } from '@mui/styles';
import Text from '../../atoms/text';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { useNavigate } from 'react-router-dom';
import  CastleOutlinedIcon  from '@mui/icons-material/CastleOutlined';
import SvgIcon from '@mui/material/SvgIcon';
import {
  faHourglassEnd,
  faBullseye,
  faChartLine,
  faHospital,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const HeaderPopUp = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#F1F6F4 ',
      paddingTop: '30px',
      width: '1840px',
      height: '398px',
      zIndex: '10',
    },
    flex: {
      display: 'flex',
      justifyContent:'space-evenly',
      alignItems: 'center',
      paddingLeft:'340px',
      width:'1100px',
      
    },
    flexCol: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      height: '304px',
      paddingLeft:'100px',
      width:'350px',
      
      
    },
    parent: {
      // backgroundColor: "#F1F6F4 ",
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
    },
  
  });
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <div className={classes.flex} >

         
          <Text
            variant={'h1popup'}
            text={'Explore by category'}
            height={'16px'}
            width="188px"
            color="#0365F2"
          ></Text>
          

         
          <Text
            variant={'h2popup'}
            text={'See recently added titles'}
            height={'16px'}
            width={'250px'}
            color="#6D787E"
          ></Text>
         

          <Text
            variant={'h22popup'}
            text={'See popular titles'}
            height={'16px'}
            width={'188px'}
            color="#6D787E"
          ></Text>
        </div>
        
        <hr
          style={{
            width: '930px',
            height:'1px',
            color: 'solid #042330',
          }}
        />
        <div className={classes.flex}>
          <div className={classes.flexCol} >
            <Button
              
              variant="text"
              startIcon={
                <SvgIcon><path d="M11.502 19C10.8404 20.5823 9.58232 21.8405 8 22.502C6.41768 21.8405 5.15956 20.5823 4.498 19H6.758C7.084 19.489 7.505 19.912 8 20.243C8.495 19.913 8.916 19.489 9.243 19H11.502ZM14 13.805L16 16.073V18H0V16.073L2 13.805V8.00002C2 4.51702 4.504 1.55302 8 0.455017C11.496 1.55302 14 4.51702 14 8.00002V13.805ZM13.27 16L12 14.56V8.00002C12 5.68202 10.43 3.57002 8 2.58002C5.57 3.57002 4 5.68102 4 8.00002V14.56L2.73 16H13.27ZM8 10C7.46957 10 6.96086 9.7893 6.58579 9.41423C6.21071 9.03916 6 8.53045 6 8.00002C6 7.46958 6.21071 6.96088 6.58579 6.5858C6.96086 6.21073 7.46957 6.00002 8 6.00002C8.53043 6.00002 9.03914 6.21073 9.41421 6.5858C9.78929 6.96088 10 7.46958 10 8.00002C10 8.53045 9.78929 9.03916 9.41421 9.41423C9.03914 9.7893 8.53043 10 8 10Z" fill="#042330"/>
                </SvgIcon>
              }
              onClick={() => navigate('/enterpreuner')}
            >
              <Text variant={'h3popup'} text={'Entrepreneurship'} height={''} />
            </Button>
            <Button
              variant="text"
              startIcon={
                <ScienceOutlinedIcon sx={{ color: '#6D787E' }} />
              }
            >
              <Text variant={'h3popup'} text={'Science'} height={''} />
            </Button>
            <Button
              variant="text"
              startIcon={
               <SvgIcon><path d="M10 20H15V22H3V20H8V18.95C6.41448 18.7908 4.88994 18.2551 3.55336 17.3874C2.21678 16.5198 1.10685 15.3454 0.316002 13.962L2.053 12.97C2.66379 14.0372 3.51237 14.9493 4.53285 15.6354C5.55334 16.3215 6.71824 16.7631 7.93708 16.9259C9.15592 17.0887 10.3959 16.9684 11.5607 16.5742C12.7255 16.1801 13.7837 15.5227 14.6532 14.6532C15.5227 13.7837 16.1801 12.7254 16.5742 11.5606C16.9684 10.3959 17.0887 9.1559 16.9259 7.93705C16.7631 6.71821 16.3215 5.55331 15.6354 4.53283C14.9493 3.51235 14.0373 2.66376 12.97 2.05298L13.962 0.315979C15.493 1.19053 16.7655 2.45448 17.6503 3.97961C18.5351 5.50474 19.0007 7.23677 19 8.99998C19 14.185 15.053 18.449 10 18.95V20ZM9 16C8.08075 16 7.1705 15.8189 6.32122 15.4671C5.47194 15.1154 4.70026 14.5997 4.05025 13.9497C3.40024 13.2997 2.88463 12.528 2.53285 11.6788C2.18106 10.8295 2 9.91923 2 8.99998C2 8.08073 2.18106 7.17047 2.53285 6.3212C2.88463 5.47192 3.40024 4.70024 4.05025 4.05023C4.70026 3.40022 5.47194 2.88461 6.32122 2.53282C7.1705 2.18104 8.08075 1.99998 9 1.99998C10.8565 1.99998 12.637 2.73748 13.9497 4.05023C15.2625 5.36299 16 7.14346 16 8.99998C16 10.8565 15.2625 12.637 13.9497 13.9497C12.637 15.2625 10.8565 16 9 16ZM9 14C10.3261 14 11.5979 13.4732 12.5355 12.5355C13.4732 11.5978 14 10.3261 14 8.99998C14 7.6739 13.4732 6.40213 12.5355 5.46445C11.5979 4.52676 10.3261 3.99998 9 3.99998C7.67392 3.99998 6.40215 4.52676 5.46447 5.46445C4.52679 6.40213 4 7.6739 4 8.99998C4 10.3261 4.52679 11.5978 5.46447 12.5355C6.40215 13.4732 7.67392 14 9 14Z" fill="#042330"/>
               </SvgIcon>
              }
            >
              <Text
                variant={'h3popup'}
                text={'Economics'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
               <SvgIcon><path d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H5ZM2 15V18H18V15H2ZM2 13H18V6H2V13ZM7 2V4H13V2H7ZM9 10H11V12H9V10Z" fill="#042330"/>
               </SvgIcon>
              }
            >
              <Text
                variant={'h3popup'}
                text={'Corporate Culture'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <PsychologyOutlinedIcon
                  fontSize="large"
                  sx={{ color: '#6D787E'}}
                />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Psychology'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SvgIcon><path d="M18 0V2C18 11.627 12.627 16 6 16H2.243C2.08 16.912 2 17.907 2 19H0C0 17.637 0.116 16.4 0.346 15.268C0.116 13.974 0 12.218 0 10C0 4.477 4.477 0 10 0C12 0 14 1 18 0ZM10 2C5.582 2 2 5.582 2 10C2 10.362 2.003 10.711 2.01 11.046C3.264 9.068 5.101 7.505 7.504 6.132L8.496 7.868C5.641 9.5 3.747 11.354 2.776 14H6C12.015 14 15.871 10.027 15.997 2.388C14.625 2.521 13.35 2.436 11.777 2.2C10.627 2.027 10.401 2 10 2Z" fill="#042330"/>
                </SvgIcon>
              }
            >
              <Text
                variant={'h3popup'}
                text={'Nature & Environment'}
                height={''}
              />
            </Button>
          </div>
          <div className={classes.flexCol} style={{transform:'translateX(-20px)'}}>
            <Button
              variant="text"
              startIcon={
                <SvgIcon><path d="M0 18H20V20H0V18ZM2 10H4V17H2V10ZM7 10H9V17H7V10ZM11 10H13V17H11V10ZM16 10H18V17H16V10ZM0 5L10 0L20 5V9H0V5ZM2 6.236V7H18V6.236L10 2.236L2 6.236ZM10 6C9.73478 6 9.48043 5.89464 9.29289 5.70711C9.10536 5.51957 9 5.26522 9 5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4C10.2652 4 10.5196 4.10536 10.7071 4.29289C10.8946 4.48043 11 4.73478 11 5C11 5.26522 10.8946 5.51957 10.7071 5.70711C10.5196 5.89464 10.2652 6 10 6Z" fill="#042330"/>
                </SvgIcon>
              }
            >
              <Text variant={'h3popup'} text={'Politics'} height={''} />
            </Button>
            <Button
              variant="text"
              startIcon={
                <FontAwesomeIcon icon={faHospital} color="#6D787E" />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Health & Nutrition'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <CastleOutlinedIcon sx = {{color: "#6D787E"}} />
              }
            >
              <Text variant={'h3popup'} text={'History'} height={''} />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SvgIcon><path d="M5.973 16H7V11H9V16H10.027C10.159 14.798 10.772 13.806 11.767 12.723C11.88 12.601 12.599 11.856 12.684 11.75C13.3903 10.8676 13.833 9.80369 13.9611 8.68075C14.0892 7.55781 13.8976 6.42151 13.4082 5.40271C12.9189 4.38392 12.1517 3.52406 11.1951 2.92215C10.2385 2.32025 9.13131 2.00078 8.00108 2.00054C6.87085 2.0003 5.76354 2.31929 4.80666 2.92079C3.84978 3.52228 3.08225 4.38182 2.59246 5.4004C2.10267 6.41899 1.91054 7.55521 2.03819 8.6782C2.16584 9.8012 2.60809 10.8653 3.314 11.748C3.4 11.855 4.121 12.601 4.232 12.722C5.228 13.806 5.841 14.798 5.973 16ZM6 18V19H10V18H6ZM1.754 13C0.812189 11.8233 0.221946 10.4044 0.0512623 8.90694C-0.119421 7.40944 0.136398 5.89418 0.789252 4.53572C1.44211 3.17725 2.46543 2.03085 3.74135 1.22856C5.01728 0.426269 6.49388 0.00073532 8.00108 0.000976665C9.50828 0.00121801 10.9847 0.427224 12.2604 1.22992C13.5361 2.03262 14.559 3.17935 15.2115 4.53803C15.8639 5.8967 16.1192 7.41204 15.948 8.90949C15.7769 10.4069 15.1862 11.8256 14.244 13.002C13.624 13.774 12 15 12 16.5V19C12 19.5304 11.7893 20.0391 11.4142 20.4142C11.0391 20.7893 10.5304 21 10 21H6C5.46956 21 4.96086 20.7893 4.58578 20.4142C4.21071 20.0391 4 19.5304 4 19V16.5C4 15 2.375 13.774 1.754 13Z" fill="#042330"/>
                </SvgIcon>
              }
            >
              <Text
                variant={'h3popup'}
                text={'Motivation & Inspiration'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <FontAwesomeIcon
                  icon={faHourglassEnd}
                  color="#6D787E"
                />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Productivity'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <FontAwesomeIcon
                  icon={faBullseye}
                  color="#6D787E"
                  size="2x"
                />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Career & Success'}
                height={''}
              />
            </Button>
          </div>

          <div className={classes.flexCol} style={{transform:'translateX(-30px)'}}>
            <Button
              variant="text"
              startIcon={
                <FontAwesomeIcon icon={faChartLine} color="#6D787E" />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Marketing & Sales'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SignalCellularAltOutlinedIcon
                  sx={{ color: '#6D787E' }}
                />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Personal Development'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <FontAwesomeIcon
                  icon={faCommentAlt}
                  color="#6D787E"
                />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Communication Skills'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: '#6D787E' }}
                />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Money & Investments'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SvgIcon><path d="M18.243 1.75698C19.705 3.22298 20.255 5.24998 19.893 7.13698C20.461 7.29698 20.999 7.59998 21.447 8.04498C22.851 9.43898 22.851 11.699 21.447 13.092L16 18.5L12.978 15.5L9.99999 18.485L1.51999 9.99298C-0.583007 7.63698 -0.504007 4.01898 1.75699 1.75698C4.02199 -0.50702 7.64499 -0.58302 10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698ZM11.962 9.46498C11.346 10.076 11.346 11.062 11.962 11.673L16 15.682L20.038 11.673C20.654 11.062 20.654 10.076 20.038 9.46498C19.414 8.84498 18.396 8.84498 17.77 9.46698L15.998 11.221L14.591 9.82498L14.228 9.46498C13.604 8.84498 12.586 8.84498 11.962 9.46498ZM3.17199 3.17198C1.68199 4.66198 1.60699 7.04698 2.97999 8.62298L9.99999 15.654L11.559 14.092L10.553 13.092C9.14899 11.699 9.14899 9.43898 10.553 8.04498C11.957 6.65198 14.233 6.65198 15.637 8.04498L16 8.40498L16.363 8.04498C16.788 7.62398 17.293 7.32998 17.828 7.16298C18.244 5.79598 17.906 4.25098 16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66599 3.01798C7.09099 1.60598 4.67599 1.66798 3.17199 3.17198Z" fill="#042330"/>
                </SvgIcon>
              }
            >
              <Text
                variant={'h3popup'}
                text={'Sex & Relationship'}
                height={''}
              />
            </Button>
            <Button
              variant="text"
              startIcon={
                <SchoolOutlinedIcon sx={{ color: '#6D787E' }} />
              }
            >
              <Text
                variant={'h3popup'}
                text={'Education'}
                height={''}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderPopUp;
