import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import '../../css/additional-styles/Sample.css';

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 shadow-lg rounded-2xl lg:col-span-4  text-whiteSecondary bg-bg-primary p-5 text-center">
      <div className="Sample">
        <div className="Sample__container ">
          <main className="Sample__container__content ">
            <Calendar onChange={onChange} value={value} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Calender;
