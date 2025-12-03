/**
 * Pagina Test: Mattoncino WhatWeDo
 * Rotta: /info/florence/what-we-do
 */

import React from 'react';
import { WhatWeDo } from '../../../components/mattoncini/florence';

const WhatWeDoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <WhatWeDo />
    </div>
  );
};

export default WhatWeDoPage;
