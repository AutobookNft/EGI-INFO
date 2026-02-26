/**
 * Mattoncino #42: FAQ
 * 
 * Domande frequenti con accordion.
 * Chiave JSON: faq.items
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation('florence');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = t('faq', { returnObjects: true }) as {
    title: string;
    items: Array<{ q: string; a: string }>;
  };

  const faq = faqData || {
    title: 'Domande Frequenti',
    items: [
      { q: 'Devo capire la blockchain?', a: 'No, l\'esperienza è identica a un e-commerce.' },
      { q: 'Quanto costa?', a: 'Minting gratis. Fee solo sul venduto.' },
      { q: 'Posso vendere opere fisiche?', a: 'Sì, con certificato digitale e QR code.' },
      { q: 'Royalty garantite?', a: 'Sì, smart contract trustless per sempre.' },
    ],
  };

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <header className="faq__header">
          <span className="faq__badge">❓ FAQ</span>
          <h2 className="faq__title">{faq.title}</h2>
        </header>

        <div className="faq__list">
          {faq.items.map((item, index) => (
            <div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button 
                className="faq__question"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq__question-text">{item.q}</span>
                <span className="faq__question-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq__more">
          <p>{t('faq.moreQuestionsTitle')}</p>
          <a href="mailto:info@florenceegi.com" className="faq__contact">
            Contattaci →
          </a>
        </div>
      </div>

      <style>{`
        .faq {
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
          padding: 4rem 1.5rem;
          color: #e0e0e0;
        }
        .faq__container { max-width: 700px; margin: 0 auto; }
        .faq__header { text-align: center; margin-bottom: 3rem; }
        .faq__badge {
          display: inline-block;
          background: rgba(167, 139, 250, 0.15);
          color: #a78bfa;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .faq__title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .faq__list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .faq__item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq__item:hover {
          border-color: rgba(167, 139, 250, 0.3);
        }
        .faq__item--open {
          border-color: rgba(167, 139, 250, 0.5);
        }
        .faq__question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .faq__question:hover {
          background: rgba(167, 139, 250, 0.05);
        }
        .faq__question-icon {
          width: 28px;
          height: 28px;
          background: rgba(167, 139, 250, 0.2);
          color: #a78bfa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 300;
          flex-shrink: 0;
          margin-left: 1rem;
        }
        .faq__answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        .faq__item--open .faq__answer {
          max-height: 200px;
          padding: 0 1.5rem 1.25rem;
        }
        .faq__answer p {
          margin: 0;
          font-size: 0.95rem;
          color: #aaa;
          line-height: 1.6;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .faq__more {
          margin-top: 2rem;
          text-align: center;
          padding: 1.5rem;
          background: rgba(167, 139, 250, 0.05);
          border-radius: 12px;
        }
        .faq__more p {
          margin: 0 0 0.75rem 0;
          color: #888;
        }
        .faq__contact {
          color: #a78bfa;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }
        .faq__contact:hover {
          color: #c4b5fd;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
