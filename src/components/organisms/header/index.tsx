import React, { useState } from 'react';
import Image from '../../atoms/images';
import SearchIcon from '@mui/icons-material/Search';
import Text from '../../atoms/text';
import Icons from '../../atoms/icons';
import { makeStyles } from '@mui/styles';
import HeaderPopUp from '../headerPopup/index';
import { useNavigate } from 'react-router-dom';
import AccountMenu from '../Accounts/index';

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const iconup = (
    <Icons
      src={
        'https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png'
      }
      height={'13px'}
      width={'12px'}
    ></Icons>
  );
  const icondown = (
    <Icons
      src={'https://pic.onlinewebfonts.com/svg/img_185276.png'}
      height={'5px'}
      width={'10px'}
    ></Icons>
  );
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
      width: '920px',
      alignItems: 'center',
    },
    blur: {
      backgroundColor: 'rgba(157, 163, 166, 0.45);',
      height: '100vh',
    },
  });
  const classes = useStyles();

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.root}>
          <div className={classes.child}>
            <div className={classes.innerDiv}>
              <div onClick={() => navigate('/')} data-testid="image">
                <Image
                  height={100}
                  width={124.09}
                  src={'../../../../logo.png'}
                ></Image>
              </div>
              <SearchIcon></SearchIcon>
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
                <Text
                  variant={'body1black'}
                  text={'Explore'}
                  height={'16px'}
                  color="black"
                />
                <div>{click ? icondown : iconup}</div>
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
