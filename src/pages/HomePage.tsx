import React from 'react';
import { useTranslation } from 'react-i18next';
import WheelMenu from '../components/navigation/WheelMenu';
import '../components/navigation/WheelMenu.css';

/**
 * HomePage - Landing con WheelMenu circolare
 * 
 * UX Design:
 * - Focus centrale: WheelMenu come unico elemento interattivo
 * - Gerarchia chiara: Logo → Subtitle → Menu → Footer
 * - Golden ratio proportions
 * - Zero distrazioni, massima chiarezza
 * 
 * In 3 secondi l'utente capisce:
 * 1) Dove guardare → Centro (logo + wheel)
 * 2) Cosa può fare → Cliccare le voci del menu
 * 3) Cosa è importante → Le icone colorate sul cerchio
 */

const HomePage: React.FC = () => {
  const { t } = useTranslation('landing');

  return (
    <div className="home">
      {/* Sfondo decorativo */}
      <div className="home__bg" aria-hidden="true">
        <div className="home__bg-glow" />
      </div>

      {/* Main content - centrato verticalmente */}
      <main className="home__content">
        {/* WheelMenu - elemento focale */}
        <WheelMenu />
      </main>

      {/* Footer minimalista */}
      <footer className="home__footer">
        <p className="home__tagline">
          {t('hero.tagline')}
        </p>
        <div className="home__badges">
          <span className="home__badge">🌱 {t('trustBadges.zeroCo2')}</span>
          <span className="home__badge">🇮🇹 {t('trustBadges.madeInItaly')}</span>
        </div>
      </footer>

      <style>{`
        .home {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: #0a0a0f;
        }

        .home__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .home__bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.08) 0%,
            rgba(212, 175, 55, 0.03) 30%,
            transparent 60%
          );
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
        }

        .home__content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          z-index: 1;
        }

        .home__footer {
          padding: 24px 20px 32px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .home__tagline {
          font-size: 0.9rem;
          color: #606070;
          margin-bottom: 12px;
          font-style: italic;
        }

        .home__badges {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .home__badge {
          font-size: 0.75rem;
          color: #505060;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 768px) {
          .home__content {
            padding: 60px 20px 40px;
          }

          .home__bg-glow {
            width: 500px;
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
