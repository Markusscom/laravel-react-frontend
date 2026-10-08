import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pieslēgties</h2>
      <input type=email value={email} onChange={e => setEmail(e.target.value)} placeholder="E-pasts" required />
      <input type=password value={password} onChange={e => setPassword(e.target.value)} placeholder="Parole" required />
      <button type="submit">Ienākt</button>
    </form>
  );
};

export default Login;
