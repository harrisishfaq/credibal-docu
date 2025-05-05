// src/pages/login.js
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
      // history.push('/');
      history.push('/credibal-docu/'); // 👈 Correct redirect
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', margin: '10px 0' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', margin: '10px 0' }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
