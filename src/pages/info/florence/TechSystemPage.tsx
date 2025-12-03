/**
 * Pagina Test: Mattoncino Tech System
 * Rotta: /info/florence/tech-system
 */

import React from 'react';
import { TechSystem } from '../../../components/mattoncini/florence';

const TechSystemPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <TechSystem />
    </div>
  );
};

export default TechSystemPage;
