import readlineSync from 'readline-sync';

export const genNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const genTests = (genTest, countTests) => {
  const inter = (acc, i) => {
    if (i + 1 > countTests) {
      return acc;
    }
    acc[i] = genTest();
    return inter(acc, i + 1);
  };
  return inter([], 0);
};

export const runGames = (genTest, countTests) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  if (countTests < 1) {
    return;
  }
  const tests = genTests(genTest, countTests);
  const quest = 0;
  const answ = 1;
  const inter = (count, i) => {
    if (i + 1 > count) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const userAnswer = readlineSync.question(`Ouestion ${tests[i][quest]}\nYour answer: `);
    if (userAnswer !== tests[i][answ]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${tests[i][answ]}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    inter(count, i + 1);
  };
  inter(countTests, 0);
};
