import runGames from '..';
import genNumber from '../utils';

const isPrime = (number) => {
  if (number < 3) {
    return number === 2 ? 1 : 0;
  }
  const iter = (i) => {
    if (number % i === 0) {
      return false;
    }
    if (i > number / 2) {
      return true;
    }
    return iter(i + 1);
  };
  return iter(2);
};

export default () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const genTest = () => {
    const question = genNumber(0, 30);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  runGames(genTest, message);
};
