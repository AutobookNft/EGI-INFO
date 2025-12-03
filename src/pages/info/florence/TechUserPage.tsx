/**
 * Pagina Test: Mattoncino Tech User
 * Rotta: /info/florence/tech-user
 */

import React from 'react';
import { TechUser } from '../../../components/mattoncini/florence';

const TechUserPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <TechUser />
    </div>
  );
};

export default TechUserPage;
