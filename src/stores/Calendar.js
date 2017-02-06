import { action, computed, observable } from 'mobx';
import { range } from 'lodash';
import CalendarDay from '../lib/CalendarDay';
import moment from 'moment';

import Event from '../lib/Event';

export const CALENDAR_GRID = 6 * 7;

export default class Calendar {
  @observable date;
  @observable start;

  constructor(start) {
    this.start = start;
    this.reset();
  }

  @computed get endDateOfThisMonth() {
    return this.date.endOf('month').date();
  }

  @computed get daysBeforeThisMonth() {
    return this.date.startOf('month').day();
  }

  @computed get daysAfterThisMonth() {
    return CALENDAR_GRID - this.daysBeforeThisMonth - this.endDateOfThisMonth;
  }

  @computed get startDateOfLastMonth() {
    return this.endDateOfLastMonth - this.daysBeforeThisMonth + 1;
  }

  @computed get endDateOfLastMonth() {
    return this.date.clone().subtract(1, 'months').endOf('month').date();
  }

  @computed get timestamp() {
    return this.date.format('MMMM YYYY');
  }

  @computed get days() {
    let before = true;
    let after = false;
    let nums = [
      ...range(this.startDateOfLastMonth, this.endDateOfLastMonth + 1),
      ...range(1, this.endDateOfThisMonth + 1),
      ...range(1, this.daysAfterThisMonth + 1)
    ];
    return nums.map((num) => {
      const date = this.date.clone();
      // watch for month change
      if (!before && num === 1) after = true;
      if (before && num === 1) before = false;
      // reflect month change
      if (before) date.subtract(1, 'month');
      if (after) date.add(1, 'month');
      // reflect number in calendar day
      date.date(num);
      // create new calendar day
      // TEMP
      const d = new CalendarDay(this, date);
      if (num === 2) {
        d.addEvent(new Event(undefined, 'Study Hall', true));
        d.addEvent(new Event(undefined, 'Reshawn on Duty', false));
      }
      if (num === 3) {
        d.addEvent(new Event(undefined, 'Maddie on Duty', false));
      }
      if (num === 8) {
        d.addEvent(new Event(undefined, 'Sydney on Duty', true));
      }
      return d;
    });
  }

  @computed get weeks() {
    return range(0, CALENDAR_GRID / 7).map((i) => {
      return this.days.slice(i * 7, (i * 7) + 7);
    });
  }

  @action.bound reset() {
    this.date = moment(this.start);
  }

  @action.bound forward() {
    this.date = this.date.clone().add(1, 'month');
  }

  @action.bound backward() {
    this.date = this.date.clone().subtract(1, 'month');
  }
}

export const calendar = new Calendar();
