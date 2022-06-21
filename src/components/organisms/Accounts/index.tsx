import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoginButton from '../../molecules/LoginButton/index';
import LogOutButton from '../../molecules/LogOUtButton/index';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  circular: {
    position: 'relative',
    width: '40px',
    height: '40px',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  logout: {
    backgroundColor: 'red',
    paddingTop: '10px',
  },
});
export default function AccountMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    <React.Fragment>
      {console.log(
        user?.email,
        user?.email_verified,
        user?.sub,
        user?.isAuthenticated,
      )}
      {isAuthenticated ? (
        <div data-testid="image">
          <div className={classes.circular} onClick={handleClick}>
            <img
              className={classes.image}
              src={user?.picture}
              alt={'profile'}
            />
          </div>
        </div>
      ) : (
        <LoginButton></LoginButton>
      )}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          {isAuthenticated && (
            <LogOutButton
              logout={logout}
              isauth={isAuthenticated}
            ></LogOutButton>
          )}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
