import { observable } from 'mobx';
import moment from 'moment';

export default class Event {
  @observable date;
  @observable title;
  
  constructor(date, title) {
    this.date = moment(date);
    this.title = title;
  }
}
