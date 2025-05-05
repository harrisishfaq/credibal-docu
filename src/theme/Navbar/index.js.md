import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';

export default function Navbar(props) {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };

  return (
    <>
      <OriginalNavbar {...props} />
      <div style={{ position: 'absolute', right: '1rem', top: '1rem' }}>
        {localStorage.getItem('auth') === 'true' && (
          <button
            onClick={handleLogout}
            style={{
              padding: '6px 12px',
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
}
