import { Component } from 'react';
import { range } from 'lodash';
import moment from 'moment';
import CalendarBox from './CalendarBox';
import CalendarRow from './CalendarRow';

class Calendar extends Component {
  constructor(props) {
    super(...arguments);
    const today = moment(props.date || new Date());
    const startOffset = moment(today).startOf('month').day();
    const endOffset = moment(today).endOf('month').day();
    const endOfLast = moment(today).subtract(1, 'months').endOf('month').date();
    const startOfLast = endOfLast - startOffset;
    const days = [
      ...range(startOfLast + 1, endOfLast + 1),
      ...range(1, moment(today).endOf('month').date() + 1),
      ...range(1, 14 - endOffset)
    ];
    let current = false;
    const weeks = days.reduce((weeks, day) => {
      if (day === 1) {
        current = !current;
      }
      if (weeks[weeks.length - 1].length >= 7) {
        weeks.push([]);
      }
      weeks[weeks.length - 1].push({ num: day, current });
      return weeks;
    }, [[]]);
    this.state = { weeks, now: moment(today) };
  }
  render() {
    const weeks = this.state.weeks.map(week => {
      return week.map(day => {
        return (
          <CalendarBox num={day.num} current={day.current} key={`${day.num}${day.active}`}/>
        );
      });
    })
    .map((week, i) => (
      <CalendarRow key={i}>{week}</CalendarRow>
    ));

    return (
      <div style={{width:'1000px', margin: 'auto'}}>
        <h1>{this.state.now.format('MMMM YYYY')}</h1>
        {weeks}
      </div>
    );
  }
}

export default Calendar;
