import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import ActionButton from '../Buttons/Action';
import { useRouteError } from 'react-router-dom';
import LogoLink from '../Links/Logo';

const ErrorBoundary = () => {
    const error = useRouteError();

    console.log(error);

    // TODO handle specific types of errors (404, 401, etc)

    return (
        <Box sx={{ height: '100vh', paddingTop: 6 }} textAlign={'center'}>
            <LogoLink 
                variant={'h2'}
                sx={{
                    textAlign: 'center'
                }}
            />
            <Container 
                maxWidth='md' 
                sx={{ 
                    height: '85%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 4,
                }}
            >
                <Typography>Oops! Something went wrong...</Typography>
                <ActionButton 
                    text={'Go Back'}
                />
            </Container>
        </Box>
    )
};

export default ErrorBoundary;