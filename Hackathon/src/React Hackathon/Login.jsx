import { Box, TextField, Typography, Button, Paper, Link } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formBg from '../assets/Images/Form-bg.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Replace with actual login logic
      navigate('/dashboard');
    } else {
      setError("Please enter both email and password");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        background: 'linear-gradient(to right, #4A90E2, #50E3C2)',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: '20px',
            borderRadius: '20px',
            maxWidth: '400px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            height: 'auto',
            minHeight: '300px',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#6432B7' }}>
            Login
          </Typography>
          {error && <Typography color="error" sx={{ marginBottom: '20px' }}>{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Email" 
              fullWidth 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              sx={{ marginBottom: '20px', '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#4A90E2' }}}
            />
            <TextField 
              label="Password" 
              type="password" 
              fullWidth 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              sx={{ marginBottom: '20px', '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#4A90E2' }}}
            />
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{ background: '#6432B7', color: 'white', '&:hover': { background: '#8FE0C4' }}}
            >
              Login
            </Button>
          </form>
          
          <Typography sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            Don't have an account? <Link href="/" sx={{ color: '#4A90E2' }}>Sign Up</Link>
          </Typography>
        </Paper>
      </Box>
      
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `url(${formBg}) no-repeat center`,
          backgroundSize: 'cover',
          color: 'white',
          textAlign: 'center',
          position: 'relative', // Add relative positioning to the box
        }}
      >
        
  
      </Box>
    </Box>
  );
};

export default Login;
