// Imports
import { render, fireEvent } from '@testing-library/react';
import Box from '@mui/material/Box';
import Navbar from '.';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
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
        MuiTextField: {
          styleOverrides: {
            root: {
              '& label.Mui-focused': {
                color: '#dbdbdb',
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
})

const createMockStore = configureMockStore();

const loggedOutMockStore = createMockStore({
    auth: {
        isLoggedIn: false, 
        loggedInUser: null,
    }
});

const loggedInMockStore = createMockStore({
    auth: {
        isLoggedIn: true, 
        loggedInUser: {
            username: 'random_user42'
        },
    }
});

describe('Unit tests for navbar component', () => {
    test("If component renders correctly for a logged out user.", async () => {
        const { getByTestId, getAllByText, getByText } = render(
            <ThemeProvider theme={theme}>
                <Provider store={loggedOutMockStore}>
                    <MemoryRouter initialEntries={['/']}>
                        <Navbar />
                    </MemoryRouter>
                </Provider>
            </ThemeProvider>
        );

        expect(getByText('Login')).toBeInTheDocument();
    });

    test("If component renders correctly for a logged in user.", async () => {
        const { getByTestId, getAllByText, getByText } = render(
            <ThemeProvider theme={theme}>
                <Provider store={loggedInMockStore}>
                    <MemoryRouter initialEntries={['/']}>
                        <Navbar />
                    </MemoryRouter>
                </Provider>
            </ThemeProvider>
        );

        // expect(getByText('Log Review')).toBeInTheDocument();
        expect(getByTestId('account-button')).toBeInTheDocument();
    });
});

// Unit tests
    // Renders correctly
        // Logged in user
        // Logged out user