/**
 * Mattoncino #27: AMMk Users - Chi Usa AMMk
 * 
 * Lista dei tipi di utenti che possono usare AMMk.
 * Chiave JSON: ammk.users
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const AMMkUsers: React.FC = () => {
  const { t } = useTranslation('florence');

  const usersData = t('ammk.users', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  const users = (t('ammk.users', { returnObjects: true }) as Array<{title:string;desc:string}>) ?? [];

  const ICONS = ['👨‍🎨', '🖼️', '🏛️', '🏢', '💚', '🎓', '🏙️', '📢', '⚖️'];

  return (
    <section className="ammk-users">
      <div className="ammk-users__container">
        <header className="ammk-users__header">
          <span className="ammk-users__badge">👥 Chi Usa AMMk</span>
          <h2 className="ammk-users__title">
            {t('ammk.usersTitle', 'Chi può usare AMMk')}
          </h2>
          <p className="ammk-users__subtitle">
            Da creator singoli a grandi istituzioni
          </p>
        </header>

        <div className="ammk-users__grid">
          {users.map((user, index) => (
            <div key={index} className="ammk-users__card">
              <div className="ammk-users__card-icon">{ICONS[index] || '👤'}</div>
              <h3 className="ammk-users__card-title">{user.title}</h3>
              <p className="ammk-users__card-desc">{user.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ammk-users {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .ammk-users__container { max-width: 1000px; margin: 0 auto; }
        .ammk-users__header { text-align: center; margin-bottom: 3rem; }
        .ammk-users__badge {
          display: inline-block;
          background: rgba(96, 165, 250, 0.15);
          color: #60a5fa;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .ammk-users__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .ammk-users__subtitle { color: #888; font-size: 1.1rem; margin: 0; }
        .ammk-users__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
        }
        .ammk-users__card {
          background: rgba(96, 165, 250, 0.05);
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 12px;
          padding: 1.25rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .ammk-users__card:hover {
          transform: translateY(-4px);
          border-color: rgba(96, 165, 250, 0.5);
        }
        .ammk-users__card-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .ammk-users__card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .ammk-users__card-desc {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

export default AMMkUsers;
