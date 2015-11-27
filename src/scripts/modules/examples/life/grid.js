import { random, empty, mutate } from './cell';

const SIZE = 16;

export const generate = (size, create) => {
  const range = R.range(0, size);
  return range.map(y => range.map(x => create(y, x)));
};

export const generateEmpty = (size = SIZE) => generate(size, empty);
export const generateRandom = (size = SIZE) => generate(size, random);

export const evolve = (grid) =>
  grid.map((row, y) => row.map((col, x) => mutate(grid, { y, x })));
