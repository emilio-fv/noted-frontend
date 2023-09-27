import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'))

let theme = createTheme({
  typography: {
    fontFamily: ['Aldrich', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#66A9A9'
    },
    text: {
      light: '#FFFFFF',
      dark: '#191414',
    },
    background: {
      card: '#2E3E50'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: '#FFFFFF'
          }
        }
      },
    }
  }
});

theme = responsiveFontSizes(theme);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);