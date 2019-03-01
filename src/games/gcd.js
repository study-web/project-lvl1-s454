import runGames from '..';
import genNumber from '../utils';

const gcd = (x, y) => {
  if (x !== 0) {
    return gcd(y % x, x);
  }
  return y;
};

export default () => {
  const message = 'Find the greatest common divisor of given numbers.';
  const genTest = () => {
    const firstNum = genNumber(0, 30);
    const secondNum = genNumber(0, 30);
    const answer = String(gcd(firstNum, secondNum));
    const question = `${firstNum} ${secondNum}`;
    return [question, answer];
  };
  runGames(genTest, message);
};
