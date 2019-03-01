import readlineSync from 'readline-sync';

const countTests = 3;

export default (genTest, gameMessage) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameMessage);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const questionIndex = 0;
  const answerIndex = 1;

  const inter = (i) => {
    if (i + 1 > countTests) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const test = genTest();
    const rightAnswer = test[answerIndex];
    const userAnswer = readlineSync.question(`Ouestion ${test[questionIndex]}\nYour answer: `);

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    inter(i + 1);
  };
  inter(0);
};
