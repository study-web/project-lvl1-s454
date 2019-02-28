import runGames from '..';
import { genNumber, gcd } from '../untils';

export default () => {
  const message = 'Find the greatest common divisor of given numbers.\n';
  const genTest = () => {
    const firstN = genNumber(0, 30);
    const secondN = genNumber(0, 30);
    const answ = String(gcd(firstN, secondN));
    const quest = `${firstN} ${secondN}`;
    return [quest, answ];
  };
  runGames(genTest, message);
};
