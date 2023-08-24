export const getNeighbors = (i, n) => {
  let res = [i];
  const r = Math.floor(i / n);
  const c = i % n;
  if (r - 1 >= 0) res.push((r - 1) * n + c);
  if (r + 1 < n) res.push((r + 1) * n + c);
  if (c - 1 >= 0) res.push(r * n + c - 1);
  if (c + 1 < n) res.push(r * n + c + 1);
  return res;
};

export const checkEndGame = (board) => {
  return board.every((item) => !item);
};
