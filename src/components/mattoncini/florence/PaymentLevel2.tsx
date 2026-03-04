/**
 * Mattoncino: PaymentLevel2 - Collector con Wallet Personale
 * Chiave JSON: florence.payments.level2
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const PaymentLevel2: React.FC = () => {
  const { t } = useTranslation('florence');
  const [open, setOpen] = useState(false);
  const steps = [1, 2, 3, 4].map(n => t(`payments.level2.step${n}`));

  return (
    <section className="payment-level" aria-labelledby="level2-title">
      <div className="payment-level__container">
        <header className="payment-level__header">
          <span className="payment-level__badge">{t('payments.level2.badge')}</span>
          <h2 id="level2-title" className="payment-level__title">{t('payments.level2.title')}</h2>
          <p className="payment-level__subtitle">{t('payments.level2.subtitle')}</p>
          <p className="payment-level__desc">{t('payments.level2.desc')}</p>
        </header>
        <button
          className="payment-level__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {t('payments.level2.title')} — {t('common:ui.details', 'Dettagli')}
          <span aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.3s' }}>▼</span>
        </button>
        {open && (
          <div className="payment-level__body">
            <ol className="payment-level__steps" aria-label={t('payments.level2.title')}>
              {steps.map((step, i) => (
                <li key={i} className="payment-level__step">
                  <span className="payment-level__step-num">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentLevel2;
