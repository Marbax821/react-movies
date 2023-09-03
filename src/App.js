import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Main } from './components/layout/Main';
import Timer from './components/Timer';
import TextColor from './components/TextColor';

import './App.css';

function App() {
  const [isTimer, setIsTimer] = useState(false);

  return (
    <>
      {/* <TextColor /> */}
      {/* <button onClick={() => setIsTimer(!isTimer)}>Toggle timer</button>
      {isTimer && <Timer />} */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
