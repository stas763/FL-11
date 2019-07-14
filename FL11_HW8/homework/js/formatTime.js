const formatTime = n => {

  let days = Math.floor(n / 1440);
  let hours = Math.floor((n - days * 1440) / 60);
  let minutes = n - days * 1440 - hours * 60;

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

console.log(formatTime(180));
console.log(formatTime(23));
console.log(formatTime(55555));
