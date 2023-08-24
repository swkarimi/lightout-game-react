import Lamp from './Lamp';
import { getNeighbors, checkEndGame } from '../methods/logic';

const Board = ({ n, board, onPlay }) => {
  const clickHandler = (i) => {
    if (checkEndGame(board)) return;
    const toggleLamp = getNeighbors(i, n);
    const newBoard = board.map((item, idx) =>
      toggleLamp.includes(idx) ? !item : item
    );
    onPlay(newBoard);
  };

  const boardUI = [...Array(n).keys()].map((r) => {
    return (
      <div key={r} className='flex flex-row'>
        {[...Array(n).keys()].map((c) => (
          <Lamp
            key={r * n + c}
            on={board[r * n + c]}
            onClick={() => clickHandler(r * n + c)}
          />
        ))}
      </div>
    );
  });

  return (
    <div className='bg-gray-800 border rounded'>
      <div className='flex flex-col '>{boardUI}</div>
    </div>
  );
};

export default Board;
