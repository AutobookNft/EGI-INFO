/**
 * Mattoncino: PaymentPhilosophy - Filosofia: Inclusione Progressiva
 * Sezione introduttiva della Gestione Pagamenti & Blockchain
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlossaryTerm } from '../../common/GlossaryTerm';

const COLORS = {
  emerald: '#10b981',
  emeraldLight: 'rgba(16, 185, 129, 0.1)',
  emeraldBorder: 'rgba(16, 185, 129, 0.4)',
  white: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.9)',
} as const;

const PaymentPhilosophy: React.FC = () => {
  const { t } = useTranslation('florence');

  return (
    <section style={{ padding: 'clamp(40px, 8vw, 80px) 20px', background: '#0a0a0a' }} aria-labelledby="philosophy-title">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ 
          padding: '24px 28px', 
          background: COLORS.emeraldLight, 
          borderLeft: `4px solid ${COLORS.emerald}`, 
          borderRadius: '0 12px 12px 0' 
        }}>
          <h4 id="philosophy-title" style={{ fontSize: '1.25rem', fontWeight: 700, color: COLORS.emerald, marginBottom: '12px' }}>
            Filosofia: Inclusione Progressiva
          </h4>
          <p style={{ color: COLORS.textPrimary, lineHeight: 1.7, margin: 0, fontSize: '1rem' }}>
            Il nostro sistema è progettato per tutti. Chi non conosce il mondo crypto usa la moneta{' '}
            <GlossaryTerm termId="fiat">FIAT</GlossaryTerm> e i metodi di pagamento tradizionali.{' '}
            Chi possiede un <GlossaryTerm termId="wallet">wallet</GlossaryTerm> può ricevere il certificato digitale{' '}
            <GlossaryTerm termId="egi">EGI</GlossaryTerm> direttamente lì.{' '}
            Chi vuole accettare pagamenti in criptovalute può farlo tramite{' '}
            <GlossaryTerm termId="partner-autorizzato">{t('payments.philosophy.partnerLabel')}</GlossaryTerm>,{' '}
            senza imporre alcuna complessità agli altri utenti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentPhilosophy;
