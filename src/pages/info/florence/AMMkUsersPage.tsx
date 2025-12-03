/**
 * Pagina Test: Mattoncino AMMk Users
 * Rotta: /info/florence/ammk-users
 */

import React from 'react';
import { AMMkUsers } from '../../../components/mattoncini/florence';

const AMMkUsersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <AMMkUsers />
    </div>
  );
};

export default AMMkUsersPage;
