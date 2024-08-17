import { AppBar, Container, MenuItem, Toolbar, Typography, Select } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext';

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={() => {
              navigate('/');
            }} variant='h6' className='title'>Krypto Verse</Typography>
            <Select variant="outlined" style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)} 
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;
