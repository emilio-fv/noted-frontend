import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const root = ReactDOM.createRoot(document.getElementById('root'))

let theme = createTheme({
  typography: {
    fontFamily: ['Aldrich', 'sans-serif'].join(','),
    allVariants: {
      color: '#dbdbdb'
    }
  },
  palette: {
    primary: {
      main: '#66A9A9'
    },
    text: {
      light: '#dbdbdb',
      dark: '#191414',
    },
    background: {
      card: '#2E3E50',
      paper: '#2E3E50',
    },
    input: {
      border: {
        main: '#66A9A9',
        hover: '#83d6d6',
      }
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#dbdbdb',
          borderColor: '#2E3E50'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderColor: 'red'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#83d6d6'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#66A9A9',
            },
            '&:hover fieldset': {
              borderColor: '#83d6d6'
            }
          },
          'input': {
            color: '#dbdbdb',
          },
        }
      },
    },
  }
});

theme = responsiveFontSizes(theme);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);