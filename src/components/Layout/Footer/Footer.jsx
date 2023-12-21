import React from 'react';
import { Container, Typography } from '@mui/material';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body2" align="center" className="footer-text">
          © {new Date().getFullYear()} MovieHouse. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
