import React, { useState } from 'react';
import { Sidebar } from './Components/Sidebar';
import { Main } from './Components/Main';

const App = () => {
  const [isCollap, setisCollap] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  const hToog = () => {
    setisCollap((p) => !p);
  };

  return (
    <div className="min-h-screen w-full flex bg-white overflow-x-hidden">
      <Sidebar onClick={hToog} isCollap={isCollap} />
      <Main isCollap={isCollap} onToggle={hToog} />
    </div>
  );
};

export default App;