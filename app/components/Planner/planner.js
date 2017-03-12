import React, { Component } from 'react';
import * as Calendar from '../../modules/Calendar.module';
import styles from './planner.scss';

class Planner extends Component {
  render() {
    return (
      <div>
        <table className="planner">
          <thead>
            <tr>{Object.keys(Calendar.getWeekdays).map(d => <th key={d}>{d}</th>)}</tr>
          </thead>
          <tbody>
            {Calendar.getMonthCalendar()
              .map(w => <tr>{ w
              .map(d =>
                <th className={d.month() !== new Date().getMonth() ? 'non-month-day' : (d.date() === new Date().getDate()) ? 'today' : 'month-day'}>
                  {d.date()}</th>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
module.exports = Planner;
