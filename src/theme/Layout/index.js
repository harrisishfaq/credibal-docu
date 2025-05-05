import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';
import { useLocation, useHistory } from '@docusaurus/router';

const SESSION_TIMEOUT_MINUTES = 30;

export default function Layout(props) {
  const location = useLocation();
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    const auth = localStorage.getItem('auth') === 'true';
    const authTime = parseInt(localStorage.getItem('authTime'), 10);
    const now = Date.now();
    const expired = authTime && now - authTime > SESSION_TIMEOUT_MINUTES * 60 * 1000;

    if (auth && expired) {
      localStorage.removeItem('auth');
      localStorage.removeItem('authTime');
    }

    if ((!auth || expired) && location.pathname !== '/credibal-docu/login') {
      history.replace('/credibal-docu/login');
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [location.pathname, history]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('authTime');
    history.push('/credibal-docu/login');
  };

  if (location.pathname === '/credibal-docu/login') {
    return <OriginalLayout {...props} />;
  }

  if (isAuthenticated === null) return null; // avoid flash while checking

  return (
    <>
      {isAuthenticated && (
        <div style={{
          position: 'fixed',
          top: '15px',
          right: '150px',
          zIndex: 1000
        }}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#e63946',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Logout
          </button>
        </div>
      )}
      <OriginalLayout {...props} />
    </>
  );
}






// import React, { useEffect } from 'react';
// import OriginalLayout from '@theme-original/Layout';
// import { useLocation } from '@docusaurus/router';

// export default function Layout(props) {
//   const location = useLocation();

//   useEffect(() => {
//     const logoutBtn = document.querySelector('.logout-button');
//     if (logoutBtn) {
//       logoutBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         localStorage.removeItem('auth');
//         window.location.href = '/login';
//       });
//     }
//   }, [location]);

//   return <OriginalLayout {...props} />;
// }
