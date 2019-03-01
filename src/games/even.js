import runGames from '..';
import genNumber from '../utils';

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const genTest = () => {
    const num = genNumber(0, 20);
    const answer = num % 2 ? 'no' : 'yes';
    return [num, answer];
  };
  runGames(genTest, message);
};
