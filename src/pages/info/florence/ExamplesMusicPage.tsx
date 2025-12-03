/**
 * Pagina Test: Mattoncino ExamplesMusic
 * Rotta: /info/florence/examples-music
 */

import React from 'react';
import { ExamplesMusic } from '../../../components/mattoncini/florence';

const ExamplesMusicPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <ExamplesMusic />
    </div>
  );
};

export default ExamplesMusicPage;
