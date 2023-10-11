import React from 'react';
import { HeaderLs, TableLS } from '../partials/laporansaya';

const LaporanSaya = () => {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <HeaderLs />
        <TableLS />
      </div>
    </main>
  );
};

export default LaporanSaya;
