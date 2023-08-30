import React from 'react';
import Logo from '../assets/icon.png';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', padding: '12px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#1c1b1b',
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={Logo}
                alt="logo"
                style={{ width: '150px', height: '100px' }}
              />
              REACTOR
            </div>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1c1b1b',
              textDecoration: 'none',
            }}
          >
            REACTOR
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
