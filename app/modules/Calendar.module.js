import moment from 'moment';
import _ from 'lodash';

class Calendar {
  constructor(month, year) {
    this.month = month;
    this.year = year;
  }

  getLastDayOfMonth() {
    return new Date(this.year, this.month, 0).getDate();
  }

  getPreviousMonthDays() {
    const prevMonth = this.month - 1;
    const indexOfFirstDay = moment(`${this.year}/${prevMonth}/${1}`).day();
    const lastDayOfLastMonth = this.getLastDayOfMonth(prevMonth, this.year) + 1;
    return indexOfFirstDay === 0 ? []
        : _.range(lastDayOfLastMonth - indexOfFirstDay, lastDayOfLastMonth)
          .map(d => this.mapDaysToDates(prevMonth, d));
  }

  getCurrentMonthDays() {
    return _.range(1, this.getLastDayOfMonth() + 1).map(d => moment(`${this.year}-${this.month}-${d}`));
  }
  mapDaysToDates(month, days) {
    return moment(`${this.year}-${month}-${days}`);
  }
/*
  getNextMonthDays = (month, year, currentCalendarSize) => {
    const maxSize = 42;
    let nextMonth = _.range(1, (maxSize + 1) - currentCalendarSize);
    if (nextMonth.length > 6) {
      nextMonth = nextMonth.slice(0, -7);
    }
    return nextMonth.map(d => moment(`${year}-${month + 1}-${d}`));
  };*/

}

const getLastDayOfMonth = (month, year) => new Date(year, month, 0).getDate();

const getPreviousMonthDays = (month, year) => {
  const indexOfFirstDay = moment(`${year}-${month - 1}-${1}`).day();
  const lastDayOfLastMonth = getLastDayOfMonth(month - 1, year);
  const previousMonth = indexOfFirstDay === 0 ? []
  : _.range((lastDayOfLastMonth + 1) - indexOfFirstDay, lastDayOfLastMonth + 1);
  return previousMonth.map(d => moment(`${year}-${month - 1}-${d}`));
};

const getCurrentMonthDays = (month, year) => {
  const lengthOfCurrentMonth = getLastDayOfMonth(month, year);
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

export const getWeekdaysShort = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thur: 4,
  Fri: 5,
  Sat: 6,
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
