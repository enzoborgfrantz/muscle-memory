import React, { Component } from 'react';
import * as Calendar from '../../modules/Calendar.module';
import styles from './datePicker.scss';

class DatePicker extends Component {
  render() {
    return (
      <div>
        <table className="date-picker">
          <thead>
            <tr>{Object.keys(Calendar.getWeekdaysShort).map(d => <th key={d}>{d}</th>)}</tr>
          </thead>
          <tbody>
            {Calendar.getMonthCalendar()
              .map(w => <tr>{ w
              .map(d =>
                <th>
                  <span className={d.month() !== new Date().getMonth() ? 'non-month-day' : (d.date() === new Date().getDate()) ? 'today' : 'month-day'}>{d.date()}</span></th>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
module.exports = DatePicker;
