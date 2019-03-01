import runGames from '..';
import genNumber from '../utils';

const progressionLength = 10;

export const genProgression = (count) => {
  const step = genNumber(0, 10);
  const progression = [];
  progression[0] = genNumber(0, 10);
  const inter = (acc, i) => {
    if (i === count) {
      return acc;
    }
    acc[i] = acc[i - 1] + step;
    return inter(acc, i + 1);
  };
  return inter(progression, 1);
};

export default () => {
  const message = 'What number is missing in the progression?';
  const genTest = () => {
    const progression = genProgression(progressionLength);
    const numIndexHide = genNumber(0, progressionLength);
    const answer = String(progression[numIndexHide]);
    progression[numIndexHide] = '..';
    const question = `${progression.join(' ')}`;
    return [question, answer];
  };
  runGames(genTest, message);
};
