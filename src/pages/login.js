import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'appcredibal@gmail.com' && password === 'App123$%^') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('authTime', Date.now().toString());

      // history.replace('/');
      history.push('/credibal-docu/'); // 👈 Correct redirect

    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', paddingTop: '100px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', marginBottom: 10, padding: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 10, padding: 10 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10 }}>
          Login
        </button>
      </form>
    </div>
  );
}
