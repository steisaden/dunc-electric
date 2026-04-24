import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const redirectPath = window.sessionStorage.getItem('dunc-electric-redirect');
if (redirectPath) {
  window.sessionStorage.removeItem('dunc-electric-redirect');
  const base = import.meta.env.BASE_URL;
  const target = base === '/' ? redirectPath : `${base.replace(/\/$/, '')}${redirectPath}`;
  window.history.replaceState({}, '', target);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
