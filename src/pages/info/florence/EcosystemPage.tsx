/**
 * Pagina Test: Mattoncino Ecosystem
 * Rotta: /info/florence/ecosystem
 */

import React from 'react';
import { Ecosystem } from '../../../components/mattoncini/florence';

const EcosystemPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Ecosystem />
    </div>
  );
};

export default EcosystemPage;
