import runGames from '..';
import genNumber from '../utils';

const operations = ['+', '-', '*'];

export default () => {
  const message = 'What is the result of the expression?';
  const genTest = () => {
    const firstNum = genNumber(0, 10);
    const secondNum = genNumber(0, 10);
    const operationIndex = genNumber(0, operations.length);
    const question = `${firstNum} ${operations[operationIndex]} ${secondNum}`;
    let answer = '';

    switch (operations[operationIndex]) {
      case '+':
        answer = String(firstNum + secondNum);
        break;
      case '-':
        answer = String(firstNum - secondNum);
        break;
      default:
        answer = String(firstNum * secondNum);
    }
    return [question, answer];
  };
  runGames(genTest, message);
};
