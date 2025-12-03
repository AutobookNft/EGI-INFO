/**
 * Pagina Test: Mattoncino ExamplesBooks
 * Rotta: /info/florence/examples-books
 */

import React from 'react';
import { ExamplesBooks } from '../../../components/mattoncini/florence';

const ExamplesBooksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <ExamplesBooks />
    </div>
  );
};

export default ExamplesBooksPage;
