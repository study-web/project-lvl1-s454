import runGames from '..';
import genNumber from '../utils';

const isSimpleNumber = (number) => {
  const inter = (i) => {
    if (number % i === 0 || number < 2) {
      return false;
    }
    if (i > number / 2) {
      return true;
    }
    return inter(i + 1);
  };
  return inter(2);
};

export default () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const genTest = () => {
    const question = genNumber(0, 30);
    const answer = isSimpleNumber(question) ? 'yes' : 'no';
    return [question, answer];
  };
  runGames(genTest, message);
};
