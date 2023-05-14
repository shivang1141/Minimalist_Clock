const clockHours = document.querySelector('.clock__hours');
const clockMinutes = document.querySelector('.clock__minutes');
const clockSeconds = document.querySelector('.clock__seconds');
const clockMonth = document.querySelector('.clock__month');
const clockDay = document.querySelector('.clock__day');
const clockYear = document.querySelector('.clock__year');
const clockDayOfWeek = document.querySelector('.clock__day-of-week');
const clockAmPm = document.querySelector('.clock__ampm');
const toggleButton = document.querySelector('.clock__toggle');
const toggleDarkModeSwitch = document.querySelector('.toggle-dark-mode-switch');

let is24HourFormat = true;

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

function getDayName(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  updateClock();
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = padNumber(now.getMinutes());
  const seconds = padNumber(now.getSeconds());
  const month = padNumber(now.getMonth() + 1);
  const day = padNumber(now.getDate());
  const year = now.getFullYear();
  const dayOfWeek = getDayName(now);

  if (is24HourFormat) {
    hours = padNumber(hours);
    clockAmPm.textContent = '';
  } else {
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = padNumber(hours % 12 || 12);
    clockAmPm.textContent = ` ${amPm}`;
  }

  clockHours.textContent = hours;
  clockMinutes.textContent = minutes;
  clockSeconds.textContent = seconds;
  clockMonth.textContent = month;
  clockDay.textContent = day;
  clockYear.textContent = year;
  clockDayOfWeek.textContent = dayOfWeek;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const dividers = document.querySelectorAll('.clock__divider');
  dividers.forEach(divider => divider.classList.toggle('dark-mode'));
}

toggleDarkModeSwitch.addEventListener('change', () => {
  toggleDarkMode();
});

toggleButton.addEventListener('click', toggleFormat);

updateClock();
setInterval(updateClock, 1000);
