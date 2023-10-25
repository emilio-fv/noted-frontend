import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import NavButton from '../Buttons/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const pages = ['home', 'music', 'reviews', 'connect'];
const settings = ['Profile', 'Logout'];

const Navbar = ({ setOpenModal }) => {
  // Auth helpers
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // Navigation helpers
  const navigate = useNavigate();

  // Nav Menu & Account Menu Helpers
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
        dispatch(logout())
        break;
    }
    setAnchorElUser(null)
  };

  // Handle login button
  const handleLoginButton = () => {
    setOpenModal('login');
  };

  // Handle log review button 
  const handleLogReviewButton = () => {
    setOpenModal('review');
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
              variant={'h4'}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            />
            {/* Mobile Pages Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
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
                        color: 'text.dark'
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
              variant={'h5'}
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
                    <ActionButton 
                      handleClick={handleLogReviewButton}
                      sx={{
                        fontSize: '.75rem',
                        maxHeight: '20px',
                      }}
                      text={'Log Review'}
                    />
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
              : <ActionButton handleClick={handleLoginButton} text={'Login'}/>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
};

export default Navbar;