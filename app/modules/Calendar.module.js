import moment from 'moment';
import _ from 'lodash';

const getLastDayOfMonth = (month, year) => new Date(year, month, 0).getDate();

const getPreviousMonthDays = (month, year) => {
  const indexOfFirstDay = moment(`${month + 1}/${1}/${year}`).day();
  const lastDayOfLastMonth = getLastDayOfMonth(month, year);
  const previousMonth = indexOfFirstDay === 0 ? []
  : _.range((lastDayOfLastMonth + 1) - indexOfFirstDay, lastDayOfLastMonth + 1);
  return previousMonth.map(d => moment(`${year}-${month - 1}-${d}`));
};

const getCurrentMonthDays = (month, year) => {
  const lengthOfCurrentMonth = getLastDayOfMonth(month + 1, year);
  return _.range(1, lengthOfCurrentMonth + 1).map(d => moment(`${year}-${month}-${d}`));
};

const getNextMonthDays = (month, year, currentCalendarSize) => {
  const maxSize = 42;
  let nextMonth = _.range(1, (maxSize + 1) - currentCalendarSize);
  if (nextMonth.length > 6) {
    nextMonth = nextMonth.slice(0, -7);
  }
  return nextMonth.map(d => moment(`${year}-${month + 1}-${d}`));
};

export const getMonthCalendar = (month = new Date().getMonth() + 1, day = 1, year = new Date().getFullYear()) => {
  const previousMonth = getPreviousMonthDays(month, year);
  const currentMonth = getCurrentMonthDays(month, year);
  const nextMonth = getNextMonthDays(month, year, previousMonth.length + currentMonth.length);
  return _.chunk([...previousMonth, ...currentMonth, ...nextMonth], 7);
};

export const getWeekdays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export const getMonths = () => [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
