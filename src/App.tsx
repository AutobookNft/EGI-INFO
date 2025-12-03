import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import router from './router';
import './styles/globals.css';

/**
 * App - Componente principale FlorenceEGI Info
 * 
 * Integra:
 * - React Router per la navigazione SPA
 * - i18next per l'internazionalizzazione
 * - Sistema di glossario con "Torna al testo"
 */

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
