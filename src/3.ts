// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to get the average of an array of numbers
function getAverage(numbers: number[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Function to convert a Celsius temperature to Fahrenheit
function celsiusToFahrenheit(celsius: number) {
  return (celsius * 9/5) + 32;
}

// Function to get the current date and time
function getCurrentDate() {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}
