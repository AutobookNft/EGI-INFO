/**
 * Pagina Test: Mattoncino Payments
 * Rotta: /info/florence/payments
 */

import React from 'react';
import { Payments } from '../../../components/mattoncini/florence';

const PaymentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Payments />
    </div>
  );
};

export default PaymentsPage;
