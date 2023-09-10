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
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  currentDayOfWeek;

const currentUTCTime = new Date().getTime();
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  currentUTCTime;
