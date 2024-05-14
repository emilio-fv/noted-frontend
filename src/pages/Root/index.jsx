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
  // maxWidth: { sm: '30%' },
  maxWidth: '275px',
  width: '60%',
  backgroundColor: 'background.card',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 3,
  borderRadius: '2.5%',
  overflow: 'scroll'
};

const Root = () => {
  // Handle modals
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (modalInfo) => setOpenModal(modalInfo);
  const handleCloseModal = () => setOpenModal(false);

  let modal;

  if (openModal === 'register') {
    modal = <Box sx={modalStyles} >
      <RegisterForm handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>
    </Box>
  } else if (openModal === 'login') {
    modal = <Box sx={modalStyles} >
      <LoginForm handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>
    </Box>
  } else if (openModal === 'review') {
    modal = <Box sx={modalStyles} >
      <LogReviewForm handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>
    </Box>
  } else {
    modal = null;
  }

  return (
    <Box sx={{ height: '100vh', }} >
      <Navbar openModal={openModal} handleOpenModal={handleOpenModal}/>
      <Container maxWidth='md' sx={{ height: '85%' }}>
        <Outlet context={[handleOpenModal, handleCloseModal]}/>
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