import { genNumber, runGames } from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const countRound = 3;
  runGames(() => {
    const num = genNumber(0, 20);
    return [num, num % 2 ? 'no' : 'yes'];
  }, countRound);
};
