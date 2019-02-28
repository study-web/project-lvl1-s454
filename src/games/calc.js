import runGames from '..';
import { genNumber } from '../untils';

export default () => {
  const message = 'What is the result of the expression?\n';
  const genTest = () => {
    const firstN = genNumber(0, 10);
    const secondN = genNumber(0, 10);
    const oper = genNumber(0, 3);
    const operations = ['+', '-', '*'];
    const quest = `${firstN} ${operations[oper]} ${secondN}`;
    let answ = '';
    switch (operations[oper]) {
      case '+':
        answ = String(firstN + secondN);
        break;
      case '-':
        answ = String(firstN - secondN);
        break;
      default:
        answ = String(firstN * secondN);
    }
    return [quest, answ];
  };
  runGames(genTest, message);
};
