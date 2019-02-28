export const genNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (firstN, secondN) => {
  if (firstN === secondN) {
    return firstN;
  }
  if (firstN > secondN) {
    return gcd(secondN, firstN - secondN);
  }
  return gcd(firstN, secondN - firstN);
};
