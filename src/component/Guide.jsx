import Title from './Title';

const Guide = ({ n, onClick }) => {
  return (
    <div className='absolute z-10 p-4 -translate-x-1/2 bg-gray-900 rounded left-1/2 w-80'>
      <div className='p-4'>
        <Title />
      </div>
      <ul className='space-y-4 text-gray-200 font-Laila'>
        <li>The game consists of a n by n grid of lights.</li>
        <li>
          When the game starts, a random number of these lights is switched on.
        </li>
        <li>
          Pressing any of the lights will toggle it and the adjacent lights.
        </li>
        <li>The goal of the puzzle is to switch all the lights off.</li>
      </ul>
      <div className='grid grid-cols-4 pt-4 gap-x-4'>
        <button
          className='py-1 font-semibold rounded cursor-pointer font-Laila bg-sky-400'
          onClick={() => onClick(3)}
        >
          3x3
        </button>
        <button
          className='py-1 font-semibold rounded cursor-pointer font-Laila bg-sky-400'
          onClick={() => onClick(4)}
        >
          4x4
        </button>
        <button
          className='py-1 font-semibold rounded cursor-pointer font-Laila bg-sky-400'
          onClick={() => onClick(5)}
        >
          5x5
        </button>
        <button
          className='py-1 font-semibold rounded cursor-pointer font-Laila bg-sky-400'
          onClick={() => onClick(6)}
        >
          6x6
        </button>
      </div>
    </div>
  );
};

export default Guide;
