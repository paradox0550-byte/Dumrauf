import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import LegalPages from './LegalPages';
import './styles.css';
const legalPaths = ['/privacy-policy', '/personal-data-consent', '/cookie-policy'];
const isLegalPage = legalPaths.includes(window.location.pathname.replace(/\/$/, ''));
createRoot(document.getElementById('root')!).render(<React.StrictMode>{isLegalPage ? <LegalPages /> : <App />}</React.StrictMode>);
