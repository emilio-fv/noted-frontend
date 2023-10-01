import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import LoginForm from '../../components/Forms/Login';
import LogReviewForm from '../../components/Forms/LogReview';
import Navbar from '../../components/Navbar';
import RegisterForm from '../../components/Forms/Register';

const modalStyles = {
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
};

const Root = () => {
  // Handle all modals
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (modalInfo) => setOpenModal(modalInfo);
  const handleCloseModal = () => setOpenModal(false);

  let modal;

  if (openModal === 'register') {
    modal = <Box sx={modalStyles} >
      <RegisterForm setOpenModal={handleOpenModal} />
    </Box>
  } else if (openModal === 'login') {
    modal = <Box sx={modalStyles} >
      <LoginForm setOpenModal={handleOpenModal} />
    </Box>
  } else if (openModal === 'review') {
    modal = <Box sx={modalStyles} >
      <LogReviewForm setOpenModal={handleOpenModal}/>
    </Box>
  } else {
    modal = null;
  }

  return (
    <Box sx={{ height: '100vh', }} >
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