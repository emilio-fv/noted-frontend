import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useOutletContext } from 'react-router-dom';
import { setSelectedReviewToDelete, setSelectedReviewToUpdate } from '../../../../features/reviews/reviewsSlice';
import { connect } from 'react-redux';

const LoggedInUserReviewCard = ({ review, setSelectedReviewToDelete, setSelectedReviewToUpdate }) => {
  const [ openModal, setOpenModal ] = useOutletContext();

  const handleEditButtonClick = () => {
    setSelectedReviewToUpdate(review);
    setOpenModal('editReview');
  };

  const handleDeleteButtonClick = () => {
    setSelectedReviewToDelete(review._id);
    setOpenModal('deleteReview');
  };

  return (
    <Box
      sx={{
        paddingX: { xs: 12, sm: 3, md: 2 },
        paddingY: 2,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}
    >
      <Box 
        component={'img'}
        sx={{
          width: '100%',
          height: 'auto'
        }}
        src={review.albumImages[0].url} // TODO update to include actual album cover
      />
      <Typography
        sx={{
          fontSize: { md: '.75rem'},
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontStyle: 'italic',
          marginTop: 1,
        }}
      >
        {review.album}
      </Typography>
      <Typography
        sx={{
          fontSize: { md: '.75rem'},
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {review.artist}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <Typography
          sx={{
            fontSize: { md: '.75rem'},
          }}
        >
          {review.date}
        </Typography>
        <IconButton onClick={handleEditButtonClick} sx={{ fontSize: '.75rem', color: 'text.light' }}>
          <EditIcon fontSize='inherit'/>
        </IconButton>
        <IconButton onClick={handleDeleteButtonClick} sx={{ fontSize: '.75rem', color: 'text.light' }}>
          <DeleteIcon fontSize='inherit'/>
        </IconButton>
      </Box>
    </Box>
  )
};

const mapDispatchToProps = {
  setSelectedReviewToDelete,
  setSelectedReviewToUpdate,
};

export default connect(null, mapDispatchToProps)(LoggedInUserReviewCard);