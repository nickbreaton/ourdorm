import { observable } from 'mobx';
import moment from 'moment';

class Event {
  @observable date;
  @observable title;
  constructor(date, title) {
    this.date = moment(date);
    this.title = title;
  }
}

export default Event;
