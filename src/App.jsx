import './App.css';
import Game from './component/Game';
import { useState } from 'react';
import Guide from './component/Guide';

function App() {
  const [n, setN] = useState(null);
  const [showGuide, setShowGuide] = useState(true);

  const resetGameHandler = () => {
    setShowGuide(true);
    setN(null);
  };

  const clickHandler = (num) => {
    setN(num);
    setShowGuide(false);
  };
  return (
    <div className='mt-10'>
      {showGuide && <Guide onClick={clickHandler} />}
      {!showGuide && <Game n={n} onResetGame={resetGameHandler} />}
    </div>
  );
}

export default App;
