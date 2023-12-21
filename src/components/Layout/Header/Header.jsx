// En src/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'; 
import './Header.css'; // Importa el archivo de estilos

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header-container">
        <div className="header-container">
          <Typography variant="h6">MovieHouse</Typography>
          <List component="nav" aria-label="main mailbox folders" className="nav-list">
            <ListItem button component={Link} to="/Home">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/Movies">
              <ListItemText primary="Movies" />
            </ListItem>
          </List>
        </div>

        <div >
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" button component={Link} to="/Transaction">
            <ShoppingCartIcon  />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
