import { computed, observable } from 'mobx';
import moment from 'moment';

export default class CalendarDay {
  @observable calendar;
  @observable date;

  constructor(calendar, date) {
    this.calendar = calendar;
    this.date = moment(date);
  }

  @computed get current() {
    return this.calendar.date.isSame(this.date, 'month');
  }

  @computed get num() {
    return this.date.date();
  }
}
