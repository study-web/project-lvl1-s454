import readlineSync from 'readline-sync';

const countTests = 3;

export default (genTest, gameMessage) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameMessage);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (i) => {
    if (i >= countTests) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const [question, rightAnswer] = genTest();
    const userAnswer = readlineSync.question(`Ouestion ${question}\nYour answer: `);

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    iter(i + 1);
  };
  iter(0);
};
