import runGames from '..';
import genNumber from '../untils';

export const arithmProg = () => {
  let num = genNumber(0, 10);
  const step = genNumber(0, 10);
  const inter = (acc, i) => {
    if (i === 10) {
      return acc;
    }
    acc[i] = num;
    num += step;
    return inter(acc, i + 1);
  };
  return inter([], 0);
};

export default () => {
  const message = 'What number is missing in the progression?';
  const genTest = () => {
    const prog = arithmProg();
    const hide = genNumber(0, prog.length);
    const answ = String(prog[hide]);
    prog[hide] = '..';
    const quest = `${prog.join(' ')}`;
    return [quest, answ];
  };
  runGames(genTest, message);
};
