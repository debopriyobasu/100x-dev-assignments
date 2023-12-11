let count = 1;
let endCount = 10;
let timeoutId;

const incrementCounter = () => {
  console.log(count);
  count = count + 1;
  if (count > endCount) {
    clearTimeout(timeoutId);
  } else {
    timeoutId = setTimeout(incrementCounter, 1000);
  }
};
timeoutId = setTimeout(incrementCounter, 1000);
