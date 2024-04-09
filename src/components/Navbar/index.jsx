import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoLink from '../Links/Logo';
import ActionButton from '../Buttons/Action';
import NavLink from '../Links/Nav';
import NavButton from '../Buttons/Nav';
import { useLogoutMutation } from '../../services/auth/authService';
import { connect } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const pages = ['home', 'music', 'reviews', 'connect'];
const settings = ['Profile', 'Logout'];

const Navbar = ({ handleOpenModal, isLoggedIn }) => {
  // Media query helper
  const desktopScreenSize = useMediaQuery((theme) => theme.breakpoints.up('md'));

  // Auth helpers
  const [ logout ] = useLogoutMutation();

  // Navigation helpers
  const navigate = useNavigate();

  // Nav menu & Account menu helpers
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = (setting) => {
    switch (setting) {
      case 'Profile':
        break;
      case 'Logout':
        logout();
        break;
    }
    setAnchorElUser(null)
  };

  // Handle login button
  const handleLoginButton = () => {
    handleOpenModal('login');
  };

  // Handle log review button 
  const handleLogReviewButton = () => {
    handleOpenModal('review');
  }

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ 
          height: '15%',
          justifyContent: 'center',
          backgroundColor: 'inherit', 
        }} 
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Logo */}
            <LogoLink 
              variant={'h3'}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            />
            {/* Mobile Pages Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                data-testid="menu-icon"
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: 'text.light'
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink 
                      sx={{
                        color: 'text.light'
                      }}
                      path={`/${page}`}
                      text={page.toUpperCase()}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Mobile Logo */}
            <LogoLink
              variant={'h4'}
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
              }}
            />
            {/* Desktop Pages Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavButton 
                  key={page}
                  handleClick={() => {
                    handleCloseNavMenu()
                    navigate(`/${page}`)
                  }}
                  text={page}
                />
              ))}
            </Box>
            {/* Account Icon / Login Button */}
            {isLoggedIn
              ? <Box 
                  sx={{ 
                    flexGrow: 0, 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4, 
                  }}
                >
                  {/* Log review button */}
                  {desktopScreenSize 
                    ? <ActionButton 
                        handleClick={handleLogReviewButton}
                        sx={{
                          fontSize: '.75rem',
                          maxHeight: '20px',
                        }}
                        text={'Log Review'}
                      />
                    : <IconButton data-testid='log-review-button' onClick={handleLogReviewButton} sx={{ p: 0, marginRight: -1 }}>
                      <AddCircleOutlineIcon fontSize='medium' htmlColor='white' />
                    </IconButton>
                  }

                  {/* Account menu button */}
                  <Tooltip title="Open settings">
                    <IconButton data-testid='account-button' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <AccountCircleIcon fontSize='large' htmlColor='white'/>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              : <ActionButton 
                  handleClick={handleLoginButton} 
                  text={'Login'}
                />
            }
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
};

export default connect(mapStateToProps)(Navbar);