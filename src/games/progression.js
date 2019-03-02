import runGames from '..';
import genNumber from '../utils';

const progressionLength = 10;

const genProgression = (firstStep, step) => {
  const inter = (acc, i) => {
    if (i > progressionLength) {
      return acc;
    }
    acc[i] = firstStep + step * i;
    return inter(acc, i + 1);
  };
  return inter([], 1);
};

export default () => {
  const message = 'What number is missing in the progression?';
  const genTest = () => {
    const firstStepOfProgression = genNumber(0, 10);
    const sterOfProgression = genNumber(0, 10);
    const progression = genProgression(firstStepOfProgression, sterOfProgression);
    const numIndexHide = genNumber(0, progressionLength);
    const answer = String(progression[numIndexHide]);
    progression[numIndexHide] = '..';
    const question = progression.join(' ');
    return [question, answer];
  };
  runGames(genTest, message);
};
