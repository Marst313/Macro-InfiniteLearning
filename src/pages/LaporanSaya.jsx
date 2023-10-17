import React, { useState } from 'react';
import { HeaderLs, TableLS } from '../partials/laporansaya';

const LaporanSaya = () => {
  const [search, setSearch] = useState('');

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <HeaderLs setSearch={setSearch} search={search} />
        <TableLS search={search} />
      </div>
    </main>
  );
};

export default LaporanSaya;
