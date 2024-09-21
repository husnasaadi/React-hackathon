import { Box, TextField, Typography, Button, Paper, Link } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import formBg from '../assets/Images/Form-bg.jpg';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || password.length < 8 || password !== confirmPassword) {
      setError("Please fill out all fields correctly.");
      return;
    }

    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 2000);
      })
      .catch((error) => setError(error.message));
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
          backgroundColor: '#ffffff',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: '40px',
            borderRadius: '20px',
            maxWidth: '400px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#6432B7' }}>
            Create Account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField label="Full Name" fullWidth required value={name} onChange={(e) => setName(e.target.value)} sx={{ marginBottom: '20px' }} />
            <TextField label="Email" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginBottom: '20px' }} />
            <TextField label="Password" type="password" fullWidth required value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginBottom: '20px' }} />
            <TextField label="Confirm Password" type="password" fullWidth required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} sx={{ marginBottom: '30px' }} />
            {error && <Typography color="error" sx={{ marginBottom: '20px' }}>{error}</Typography>}
            {success && <Typography color="success.main" sx={{ marginBottom: '20px' }}>Signup successful! Redirecting...</Typography>}
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{ background: '#6432B7', color: 'white', '&:hover': { background: '#8FE0C4' } }}>
              Signup
            </Button>
          </form>
          <Typography sx={{ marginTop: '20px', fontWeight:'bold' }}>
            Already have an account? <Link href="/login" sx={{ color: '#4A90E2' }}>Login</Link>
          </Typography>
        </Paper>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `url(${formBg}) no-repeat center center`,
          backgroundSize: 'cover',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
        }}
      >
      </Box>
    </Box>
  );
};

export default Signup;
