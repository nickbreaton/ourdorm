import React from 'react';
import { range } from 'lodash';
import moment from 'moment';
import CalendarBox from './CalendarBox';
import CalendarRow from './CalendarRow';
import { observer } from 'mobx-react';
import calendar from '../stores/calendar';

const Calendar = React.createClass({
  renderWeeks(weeks) {
    return weeks.map((week, i) => (
      <CalendarRow key={i}>
        {this.renderDays(week)}
      </CalendarRow>
    ));
  },
  renderDays(week) {
    return week.map((day, i) => (
      <CalendarBox {...day} key={i}/>
    ));
  },
  render() {
    return (
      <div style={{width: '500px'}}>
        <h1>{calendar.moment.format('MMMM YYYY')}</h1>
        <button onClick={calendar.backward}>{'< Back'}</button>
        <button onClick={calendar.reset}>{'Today'}</button>
        <button onClick={calendar.forward}>{'Next >'}</button>
        <p/>
        {this.renderWeeks(calendar.weeks)}
      </div>
    );
  }
});

export default observer(Calendar);
