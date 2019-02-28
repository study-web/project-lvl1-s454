import runGames from '..';
import genNumber from '../untils';

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const genTest = () => {
    const num = genNumber(0, 20);
    const answ = num % 2 ? 'no' : 'yes';
    return [num, answ];
  };
  runGames(genTest, message);
};
