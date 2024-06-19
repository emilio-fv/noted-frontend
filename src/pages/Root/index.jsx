import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import LoginForm from '../../components/Forms/Login';
import CreateReviewForm from '../../components/Forms/CreateReview';
import Navbar from '../../components/Navbar';
import RegisterForm from '../../components/Forms/Register';
import DeleteReviewForm from '../../components/Forms/DeleteReview';
import UpdateReviewForm from '../../components/Forms/UpdateReview';

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '370px',
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
      <CreateReviewForm handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>
    </Box>
  } else if (openModal === 'deleteReview') {
    modal = <Box sx={modalStyles}>
      <DeleteReviewForm handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>
    </Box>
  } else if (openModal === 'editReview') {
    modal = <Box sx={modalStyles}>
      <UpdateReviewForm handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/> 
    </Box>
  } else {
    modal = null;
  }

  return (
    <Box sx={{ height: '100vh', }} >
      <Navbar openModal={openModal} handleOpenModal={handleOpenModal}/>
      <Container maxWidth='md' sx={{ height: '85%' }}>
        <Outlet context={[openModal, setOpenModal]}/>
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