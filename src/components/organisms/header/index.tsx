import React, { useState } from 'react';
import Image from '../../atoms/images';
import Text from '../../atoms/text';
import { makeStyles } from '@mui/styles';
import HeaderPopUp from '../headerPopup/index';
import { useNavigate } from 'react-router-dom';
import AccountMenu from '../Accounts/index';
import { Dropdown } from '../../atoms/icons/index.stories';
import SvgIcon from '@mui/material/SvgIcon';

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      width: '100vw',
      height: '86px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    innerDiv: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '422px',
      color: '#03314B',
    },
    parent: {
      display: 'flex',
      justifyContent: 'center',
    },
    child: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '950px',
      alignItems: 'center',
    },
    blur: {
      backgroundColor: 'rgba(157, 163, 166, 0.45);',
      height: '3000px',
    },
  });
  const classes = useStyles();

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.root}>
          <div className={classes.child}>
            <div className={classes.innerDiv}>
              <div onClick={() => navigate('/')} data-testid="image"  style={{'paddingRight':'25px'}}>
                <Image
                  height={100}
                  width={124.09}
                  src={'../../../../logo.png'}
                ></Image>
              </div>
              <div >
                  <SvgIcon style={{width:'27px',height:'27'}}><path d="M17.4752 16.195L21.353 20.0719L20.0719 21.353L16.195 17.4752C14.7525 18.6316 12.9583 19.2606 11.1095 19.2579C6.61151 19.2579 2.961 15.6074 2.961 11.1095C2.961 6.61151 6.61151 2.961 11.1095 2.961C15.6074 2.961 19.2579 6.61151 19.2579 11.1095C19.2606 12.9583 18.6316 14.7525 17.4752 16.195ZM15.659 15.5232C16.8081 14.3416 17.4498 12.7577 17.4472 11.1095C17.4472 7.60744 14.6106 4.77177 11.1095 4.77177C7.60744 4.77177 4.77177 7.60744 4.77177 11.1095C4.77177 14.6106 7.60744 17.4472 11.1095 17.4472C12.7577 17.4498 14.3416 16.8081 15.5232 15.659L15.659 15.5232V15.5232Z" fill="#042330"/></SvgIcon>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100px',
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                  paddingBottom: '10px',
                }}
                onClick={() =>
                  click ? setClick(false) : setClick(true)
                }
              >
                <>
                  <div>
                  <Text
                    variant={'body1black'}
                    text={'Explore'}
                    height={'16px'}
                    color="black"
                  />
                  </div>
                  <div style={{transform:'translateY(3px)',paddingLeft:'4px'}}>
                    <Dropdown height='13px' width='12.61px' src='https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png'/>
                  </div>
                </>
              </div>
              <div
                style={{ paddingBottom: '10px' }}
                onClick={() => navigate('/')}
              >
                <Text
                  variant={'body1black'}
                  text={'My Library'}
                  height={'16px'}
                  color="black"
                />
              </div>
            </div>
            <AccountMenu></AccountMenu>
          </div>
        </div>
      </div>
      {click ? (
        <div className={classes.blur}>
          <HeaderPopUp />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Header;
