import { checkEndGame } from '../methods/logic';
import Title from './Title';
import Board from './board';
import { useState } from 'react';
import Won from './Won';

const Game = ({ n, onResetGame }) => {
  const [board, setBoard] = useState(
    Array(n * n)
      .fill(false)
      .map(() => Math.random() < 0.3)
  );

  const handlePlay = (newBoard) => {
    setBoard(newBoard);
  };

  const resetGame = () => {
    onResetGame();
  };

  return (
    <div>
      <div className='mb-4'>
        <Title />
      </div>
      <div className='flex justify-center'>
        <Board n={n} board={board} onPlay={handlePlay} />
      </div>
      {checkEndGame(board) && <Won onClick={resetGame} />}
    </div>
  );
};

export default Game;
