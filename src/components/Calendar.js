import { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CalendarBox from './CalendarBox';
import CalendarEvent from './CalendarEvent';
import CalendarEvents from './CalendarEvents';
import CalendarNumber from './CalendarNumber';
import CalendarRow from './CalendarRow';

@inject('calendar')
@observer
class Calendar extends Component {
  render() {
    const getEvents = events => events.map((event, i) =>
      <CalendarEvent key={i} personal={event.personal}>
        {event.title}
      </CalendarEvent>
    );
    const getDays = days => days.map((day, i) =>
      <CalendarBox current={day.current} key={i}>
        <CalendarNumber>{day.num}</CalendarNumber>
        <CalendarEvents>
          {getEvents(day.events)}
        </CalendarEvents>
      </CalendarBox>
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
