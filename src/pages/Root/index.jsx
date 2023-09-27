import React, { useState } from 'react';
import { Box, Container, Modal } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import RegisterForm from '../../components/Forms/Register';
import LoginForm from '../../components/Forms/Login';

const Root = () => {
  // Handle all modals
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (modalInfo) => setOpenModal(modalInfo);
  const handleCloseModal = () => setOpenModal(false);

  // Conditionally set modal
  let modal;

  if (openModal === 'register') {
    modal = <Box
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
      <RegisterForm openModal={openModal} setOpenModal={handleOpenModal} />
    </Box>
  } else if (openModal === 'login') {
    modal = <Box
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
      <LoginForm openModal={openModal} setOpenModal={handleOpenModal} />
    </Box>
  } else {
    modal = null;
  }

  return (
    <Box
      sx={{ 
        height: '100vh',
      }}
    >
      <Navbar openModal={openModal} setOpenModal={handleOpenModal}/>
      <Container maxWidth='lg' sx={{ height: '85%' }}>
        <Outlet context={setOpenModal}/>
      </Container>
      {modal
        ? <Modal
            open={openModal ? true : false}
            onClose={() => handleCloseModal()}
          >
            {modal}
          </Modal>
        : null
      }
    </Box>
  )
}

export default Root;