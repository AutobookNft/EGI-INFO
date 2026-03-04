/**
 * Mattoncino: PaymentLevel4 - Pagamento con EGILI
 * Chiave JSON: florence.payments.level4
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const PaymentLevel4: React.FC = () => {
  const { t } = useTranslation('florence');
  const [open, setOpen] = useState(false);
  const steps = [1, 2, 3, 4, 5].map(n => t(`payments.level4.step${n}`));
  const traits = ['notTransferable', 'notQuoted', 'accountBound', 'meritBased', 'burnRate'];
  const earns = [1, 2, 3, 4, 5].map(n => t(`payments.level4.earn${n}`));

  return (
    <section className="payment-level" aria-labelledby="level4-title">
      <div className="payment-level__container">
        <header className="payment-level__header">
          <span className="payment-level__badge">{t('payments.level4.badge')}</span>
          <h2 id="level4-title" className="payment-level__title">{t('payments.level4.title')}</h2>
          <p className="payment-level__subtitle">{t('payments.level4.subtitle')}</p>
          <p className="payment-level__desc">{t('payments.level4.desc')}</p>
        </header>
        <button
          className="payment-level__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {t('payments.level4.flowTitle')}
          <span aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.3s' }}>▼</span>
        </button>
        {open && (
          <div className="payment-level__body">
            <p className="payment-level__egili-desc">
              <GlossaryTerm termId="egili">EGILI</GlossaryTerm> — {t('payments.level4.egiliDesc')}
            </p>
            <ul className="payment-level__traits" aria-label="EGILI traits">
              {traits.map((key) => (
                <li key={key}>{t(`payments.level4.${key}`)}</li>
              ))}
            </ul>
            <ol className="payment-level__steps" aria-label={t('payments.level4.flowTitle')}>
              {steps.map((step, i) => (
                <li key={i} className="payment-level__step">
                  <span className="payment-level__step-num">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <h4 className="payment-level__earn-title">{t('payments.level4.earnTitle')}</h4>
            <ul className="payment-level__earns" aria-label={t('payments.level4.earnTitle')}>
              {earns.map((earn, i) => (
                <li key={i}>{earn}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentLevel4;
