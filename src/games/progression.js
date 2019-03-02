import runGames from '..';
import genNumber from '../utils';

const progressionLength = 10;

const genProgression = (firstElement, step) => {
  const iter = (acc, i) => {
    if (i > progressionLength) {
      return acc;
    }
    return iter([...acc, (firstElement + step * i)], i + 1);
  };
  return iter([], 0);
};

export default () => {
  const message = 'What number is missing in the progression?';
  const genTest = () => {
    const firstElemOfProgression = genNumber(0, 10);
    const stepOfProgression = genNumber(0, 10);
    const progression = genProgression(firstElemOfProgression, stepOfProgression);

    const hiddenElementIndex = genNumber(0, progressionLength);
    const answer = String(progression[hiddenElementIndex]);
    progression[hiddenElementIndex] = '..';
    const question = progression.join(' ');

    return [question, answer];
  };

  runGames(genTest, message);
};
