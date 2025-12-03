/**
 * Pagina Test: Mattoncino Motto
 * Rotta: /info/florence/motto
 */

import React from 'react';
import { Motto } from '../../../components/mattoncini/florence';

const MottoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Motto />
    </div>
  );
};

export default MottoPage;
