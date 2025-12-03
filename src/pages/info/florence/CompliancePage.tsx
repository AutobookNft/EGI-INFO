/**
 * Pagina Test: Mattoncino Compliance
 * Rotta: /info/florence/compliance
 */

import React from 'react';
import { Compliance } from '../../../components/mattoncini/florence';

const CompliancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Compliance />
    </div>
  );
};

export default CompliancePage;
