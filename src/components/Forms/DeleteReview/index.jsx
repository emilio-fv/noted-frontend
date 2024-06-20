import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDeleteReviewMutation } from '../../../services/reviews/reviewsService';

const DeleteReviewForm = ({ handleOpenModal, handleCloseModal, selectedReviewToDelete }) => {
    const [ deleteReview, { isSuccess }] = useDeleteReviewMutation();

    useEffect(() => {
        if (isSuccess) {
            console.log('successfully deleted, should close now');
            handleCloseModal();
        }
    }, [isSuccess]);

    const handleDeleteButtonClick = () => {
        deleteReview(selectedReviewToDelete);
    };

    const handleCancelButtonClick = () => {
        handleCloseModal();
    };

    return (
    <>
        <Typography 
            sx={{ 
                textAlign: 'center',
                marginBottom: 2
            }}
        >
            Are you sure you want to delete this review?
        </Typography>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
            }}
        >
            <Button 
                variant='contained' 
                color='warning'
                size='small'
                onClick={handleDeleteButtonClick}
            >
                Delete
            </Button>
            <Button 
                variant='contained' 
                color='secondary'
                size='small'
                onClick={handleCancelButtonClick}
            >
                Cancel
            </Button>
        </Box>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedReviewToDelete: state.reviews.selectedReviewToDelete
    }
};

export default connect(mapStateToProps)(DeleteReviewForm);