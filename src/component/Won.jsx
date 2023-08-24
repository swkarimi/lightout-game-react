const Won = ({ onClick }) => {
  return (
    <>
      <div
        className='absolute top-0 bottom-0 left-0 right-0 z-0 cursor-pointer bg-black/90'
        onClick={onClick}
      ></div>
      <p
        className='absolute z-10 text-5xl text-yellow-200 -translate-x-1/2 cursor-pointer select-none left-1/2 animate-pulse font-Laila'
        onClick={onClick}
      >
        You Won
      </p>
    </>
  );
};

export default Won;
