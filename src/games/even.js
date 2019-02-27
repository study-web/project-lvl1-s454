import { genNumber, runGames } from '..';

export default () => {
  const countRound = 3;
  runGames(() => {
    const num = genNumber(0, 20);
    return [num, num % 2 ? 'no' : 'yes'];
  }, countRound);
};
