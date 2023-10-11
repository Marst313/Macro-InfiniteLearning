import React, { useState, useEffect } from 'react';
import Chart from '../../components/Chart';

// Import utilities

function DashboardCard05() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-bg-primary shadow-lg rounded-2xl lg:col-span-8 text-center  text-whiteSecondary overflow-hidden">
      <Chart />
    </div>
  );
}

export default DashboardCard05;
