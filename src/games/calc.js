import { genNumber, runGames } from '..';

export default () => {
  const countRound = 3;
  runGames(() => {
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
  }, countRound);
};
