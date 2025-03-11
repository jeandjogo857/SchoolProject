const generateRandomTsCode = () => {
  const num1 = Math.random();
  const num2 = Math.random();
  const num3 = Math.random();
  return `${num1}, ${num2}, ${num3}`;
};

console.log(generateRandomTsCode());
