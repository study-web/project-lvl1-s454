import runGames from '..';
import genNumber from '../utils';

export const isSimpleNumber = (number) => {
  const inter = (i) => {
    if (i === number) {
      return 'yes';
    }
    if (number % i === 0) {
      return 'no';
    }
    return inter(i + 1);
  };
  return inter(2);
};

export default () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const genTest = () => {
    const question = genNumber(0, 30);
    const answer = isSimpleNumber(question);
    return [question, answer];
  };
  runGames(genTest, message);
};
