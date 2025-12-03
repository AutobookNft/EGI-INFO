/**
 * Pagina Test: Mattoncino ExamplesArt
 * Rotta: /info/florence/examples-art
 */

import React from 'react';
import { ExamplesArt } from '../../../components/mattoncini/florence';

const ExamplesArtPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <ExamplesArt />
    </div>
  );
};

export default ExamplesArtPage;
