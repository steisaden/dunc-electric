import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const redirectPath = window.sessionStorage.getItem('dunc-electric-redirect');
if (redirectPath) {
  window.sessionStorage.removeItem('dunc-electric-redirect');
  const hash = redirectPath.startsWith('/') ? `#${redirectPath}` : `#/${redirectPath}`;
  window.location.hash = hash;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
