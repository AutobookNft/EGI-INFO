/**
 * Pagina Test: Mattoncino Governance
 * Rotta: /info/florence/governance
 */

import React from 'react';
import { Governance } from '../../../components/mattoncini/florence';

const GovernancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Governance />
    </div>
  );
};

export default GovernancePage;
