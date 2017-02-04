import { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CalendarBox from './CalendarBox';
import CalendarRow from './CalendarRow';

@inject('calendar')
@observer
class Calendar extends Component {
  render() {
    const getDays = days => days.map((day, i) =>
      <CalendarBox {...day} key={i}/>
    );
    const getWeeks = weeks => weeks.map((week, i) =>
      <CalendarRow key={i}>
        {getDays(week)}
      </CalendarRow>
    );
    return (
      <div>
        <h1>{this.props.calendar.timestamp}</h1>
        <button onClick={this.props.calendar.backward}>{'< Back'}</button>
        <button onClick={this.props.calendar.reset}>{'Today'}</button>
        <button onClick={this.props.calendar.forward}>{'Next >'}</button>
        <p/>
        {getWeeks(this.props.calendar.weeks)}
      </div>
    );
  }
}

export default Calendar;
