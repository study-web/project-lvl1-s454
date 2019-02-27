import readlineSync from 'readline-sync';

const runGame = (name, numbers) => {
  const inter = (countNumbers, i) => {
    if (i + 1 > countNumbers) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const answer = readlineSync.question(`Ouestion ${numbers[i]}\nYour answer: `);
    if (answer === 'yes' && numbers[i] % 2 !== 0) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
    if (answer === 'no' && numbers[i] % 2 === 0) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    }
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numbers[i] % 2 ? 'no' : 'yes'}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    inter(countNumbers, i + 1);
  };
  inter(numbers.length, 0);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const numbers = [15, 6, 7];
  runGame(name, numbers);
};
