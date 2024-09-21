import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom'; 
import { auth } from '../Firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuType, setMenuType] = React.useState('');
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenMenu = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuType('');
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleProductNavigation = (product) => {
    navigate(`/product/${product}`);
    handleCloseMenu();
    handleMobileMenuClose();
  };

  const handlePricingNavigation = (plan) => {
    navigate(`/pricing/${plan}`);
    handleCloseMenu();
    handleMobileMenuClose();
  };

  const handleCartNavigation = () => {
    navigate('/cart');
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      open={Boolean(mobileMenuAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={(e) => handleOpenMenu(e, 'products')}>Products</MenuItem>
      <MenuItem onClick={(e) => handleOpenMenu(e, 'pricing')}>Pricing</MenuItem>
      <MenuItem onClick={handleCartNavigation}>
        <ShoppingCartIcon /> 
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon /> Logout
      </MenuItem>
    </Menu>
  );

  const renderDropdownMenu = (
    <>
      {/* Products Dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={menuType === 'products'}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleProductNavigation('product1')}>Product 1</MenuItem>
        <MenuItem onClick={() => handleProductNavigation('product2')}>Product 2</MenuItem>
        <MenuItem onClick={() => handleProductNavigation('product3')}>Product 3</MenuItem>
      </Menu>

      {/* Pricing Dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={menuType === 'pricing'}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handlePricingNavigation('basic')}>Basic Plan</MenuItem>
        <MenuItem onClick={() => handlePricingNavigation('premium')}>Premium Plan</MenuItem>
        <MenuItem onClick={() => handlePricingNavigation('enterprise')}>Enterprise Plan</MenuItem>
      </Menu>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{
          background: '#784AC4',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}
          >
            News
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              variant="outlined"
              aria-controls={menuType === 'products' ? 'products-menu' : undefined}
              aria-haspopup="true"
              onClick={(e) => handleOpenMenu(e, 'products')}
              sx={{
                mx: 1,
                textTransform: 'uppercase',
                fontWeight: '500',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: '#9AE0BE',
                },
              }}
            >
              Products
              <ArrowDropDownIcon sx={{ ml: 1 }} />
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              aria-controls={menuType === 'pricing' ? 'pricing-menu' : undefined}
              aria-haspopup="true"
              onClick={(e) => handleOpenMenu(e, 'pricing')}
              sx={{
                mx: 1,
                textTransform: 'uppercase',
                fontWeight: '500',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: '#9AE0BE',
                },
              }}
            >
              Pricing
              <ArrowDropDownIcon sx={{ ml: 1 }} />
            </Button>

            {/* Cart Button */}
            <Button
              color="inherit"
              variant="outlined"
              onClick={handleCartNavigation}
              sx={{
                mx: 1,
                textTransform: 'uppercase',
                fontWeight: '500',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: '#9AE0BE',
                },
              }}
            >
              Cart
              <ShoppingCartIcon sx={{ ml: 1 }} />
            </Button>

            <Button
              sx={{
                background: '#9AE0BE',
                color: 'white',
                '&:hover': {
                  background: 'white',
                  color: '#784AC4',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                },
                transition: '0.3s',
              }}
              onClick={handleLogout}
            >
              <LogoutIcon />
            </Button>
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderDropdownMenu} {/* Render dropdown menus */}
    </Box>
  );
}
