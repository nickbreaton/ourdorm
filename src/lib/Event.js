import { observable } from 'mobx';
import moment from 'moment';

export default class Event {
  @observable date;
  @observable title;
  @observable personal;

  constructor(date, title, personal) {
    this.date = moment(date);
    this.title = title;
    this.personal = personal;
  }
}
