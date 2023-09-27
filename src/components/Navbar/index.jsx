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
import { useNavigate, useOutletContext } from 'react-router-dom';
import NavButton from '../Buttons/Nav';
import { Modal } from '@mui/material';
import LoginForm from '../Forms/Login';

const pages = ['home', 'music', 'reviews', 'connect'];
const settings = ['Profile', 'Logout'];

const Navbar = ({ setOpenModal }) => {
  // Navigation helpers
  const navigate = useNavigate();

  // Nav Menu & Account Menu Helpers
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  // TODO: Logged in user check
  const [loggedIn, setLoggedIn] = useState(false);

  // Login form modal helpers
  // const setOpenModal = useOutletContext();
  // const [openLoginFormModal, setOpenLoginFormModal] = useState(false);
  // const handleOpenLoginFormModal = () => setOpenLoginFormModal(true);
  // const handleCloseLoginFormModal = () => setOpenLoginFormModal(false);

  // Handle login button
  const handleLoginButton = () => {
    setOpenModal('login');
  };

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
            {loggedIn
              ? <Box sx={{ flexGrow: 0 }}>
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
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
      {/* <Modal
        open={openLoginFormModal}
        onClose={() => handleCloseLoginFormModal()}
        aria-labelledby='Login to account'
        aria-describedby='Form to login to an account'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '400px',
            width: '70vw',
            backgroundColor: 'background.card',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            borderRadius: '2.5%'
          }}
        >
          <LoginForm />
        </Box>
      </Modal> */}
    </>
  )
};

export default Navbar;