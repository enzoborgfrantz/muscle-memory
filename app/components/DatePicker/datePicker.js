import React, { Component } from 'react';
import * as Calendar from '../../modules/Calendar.module';
import styles from './datePicker.scss';
import DatePickerCalendar from './datePickerCalendar';

class DatePicker extends Component {
  constructor() {
    super();
    this.state = { showCalendar: false, date: new Date().toLocaleDateString() };
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
  }

  showCalendar() {
    this.setState({ showCalendar: true });
  }
  hideCalendar() {
    this.setState({ showCalendar: false });
  }
  render() {
    return (
      <div>
        <input type="text" className="date-picker-input" placeholder={this.state.date} onClick={this.showCalendar} onBlur={this.hideCalendar} />
        { this.state.showCalendar ? <DatePickerCalendar /> : null }
      </div>
    );
  }
}
module.exports = DatePicker;
