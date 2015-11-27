const THRESHOLD = 0.8;

export const empty = () => false;
export const random = (y, x, threshold = THRESHOLD) =>
  Math.random(y + x) > threshold;

const idx = (i, offset, size) => {
  const n = i + offset;

  if (n < 0) return size - 1;
  if (n >= size) return 0;

  return n;
};

const neighbours = (grid, { y, x }) => {
  let count = 0;

  const offsets = [-1, 0, 1];
  const size = grid.length - 1;

  for (const xo of offsets) {
    const tx = idx(x, xo, size);
    for (const yo of offsets) {
      if (!xo && !yo) continue;
      const ty = idx(y, yo, size);
      count += +!!grid[ty][tx];
    }
  }

  return count;
};

export const mutate = (grid, { y, x }) => {
  const alive = grid[y][x];
  const n = neighbours(grid, { y, x });

  return alive ?
    n >= 2 && n <= 3 :
    n === 3;
};
