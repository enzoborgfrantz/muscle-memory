import React, { Component } from 'react';
import * as Calendar from '../../modules/Calendar.module';
import styles from './datePickerCalendar.scss';

class DatePicker extends Component {
  render() {
    return (
      <div>
        <div className="date-picker-calendar">
          <div className="date-picker-navigation">
            <input type="button" className="date-picker-arrow left" value="<" />
            <span>September, 2017</span>
            <input type="button" className="date-picker-arrow right" value=">" />
          </div>
          <div>
            <table className="date-picker-dates">
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
        </div>
      </div>

    );
  }
}
module.exports = DatePicker;
