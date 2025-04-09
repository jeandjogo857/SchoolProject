function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  // Ensure the function doesn't throw an error if both arguments are out of bounds.
  if (min > max) { [min, max] = [max, min]; }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
