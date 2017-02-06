import { action, computed, observable } from 'mobx';
import { range } from 'lodash';
import moment from 'moment';

export const CALENDAR_GRID = 6 * 7;

export class Calendar {
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
    let current = false;
    return [
      ...range(this.startDateOfLastMonth, this.endDateOfLastMonth + 1),
      ...range(1, this.endDateOfThisMonth + 1),
      ...range(1, this.daysAfterThisMonth + 1)
    ]
      .map(day => {
        current = day === 1 ? (!current) : current;
        return { num: day, current };
      });
  }

  @computed get weeks() {
    const weeks = this.days.reduce((weeks, day) => {
      // latest week
      const week = weeks[weeks.length - 1];
      // add day
      week.push(day);
      // add new week if full
      if (week.length === 7) {
        weeks.push([]);
      }
      // return all weeks
      return weeks;
    }, [[]]);
    // remove empty week
    return weeks.slice(0, -1);
  }

  @action.bound reset() {
    console.log('test');
    this.date = moment(this.start);
  }

  @action.bound forward() {
    this.date = this.date.clone().add(1, 'month');
  }

  @action.bound backward() {
    this.date = this.date.clone().subtract(1, 'month');
  }
}

export default new Calendar();
