let count = 1;
let endCount = 10;
let intervalId = setInterval(() => {
  console.log(count);
  count += 1;
  if (count > endCount) clearInterval(intervalId);
}, 1000);
