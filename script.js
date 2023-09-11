const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day of the Week: ${currentDayOfWeek}`;

const currentUTCDate = new Date();
const currentUTCHours = currentUTCDate.getUTCHours();
const currentUTCMinutes = currentUTCDate.getUTCMinutes();
const currentUTCSeconds = currentUTCDate.getUTCSeconds();
const currentUTCTimeString = `${currentUTCHours}:${currentUTCMinutes}:${currentUTCSeconds}`;
document.querySelector(
  '[data-testid="currentUTCTime"]'
).textContent = `Current UTC Time: ${currentUTCTimeString}`;
