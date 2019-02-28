import runGames from '..';
import genNumber from '../untils';

const gcd = (x, y) => {
  if (x !== 0) {
    return gcd(y % x, x);
  }
  return y;
};

export default () => {
  const message = 'Find the greatest common divisor of given numbers.';
  const genTest = () => {
    const firstN = genNumber(0, 30);
    const secondN = genNumber(0, 30);
    const answ = String(gcd(firstN, secondN));
    const quest = `${firstN} ${secondN}`;
    return [quest, answ];
  };
  runGames(genTest, message);
};
