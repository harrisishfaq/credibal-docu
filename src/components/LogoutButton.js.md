import React from 'react';

export default function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/credibal-docu/login'; // Redirect to login
  };

  return (
    <a
      className="navbar__item navbar__link"
      onClick={handleLogout}
      style={{ cursor: 'pointer' }}
    >
      Logout
    </a>
  );
}
