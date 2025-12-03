/**
 * Pagina Test: Mattoncino Tech Performance
 * Rotta: /info/florence/tech-performance
 */

import React from 'react';
import { TechPerformance } from '../../../components/mattoncini/florence';

const TechPerformancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <TechPerformance />
    </div>
  );
};

export default TechPerformancePage;
