import { action, computed, observable } from 'mobx';
import { range } from 'lodash';
import moment from 'moment';

export const CALENDAR_GRID = 6 * 7;

export function calendar(date) {
  return observable({
    moment: moment(date),
    endDateOfThisMonth: computed(function () {
      return this.moment.endOf('month').date();
    }),
    daysBeforeThisMonth: computed(function () {
      return this.moment.startOf('month').day();
    }),
    daysAfterThisMonth: computed(function () {
      return CALENDAR_GRID - this.daysBeforeThisMonth - this.endDateOfThisMonth;
    }),
    startDateOfLastMonth: computed(function () {
      return this.endDateOfLastMonth - this.daysBeforeThisMonth + 1;
    }),
    endDateOfLastMonth: computed(function () {
      return this.moment.clone().subtract(1, 'months').endOf('month').date();
    }),
    timestamp: computed(function () {
      return this.moment.format('MMMM YYYY');
    }),
    days: computed(function () {
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
    }),
    weeks: computed(function () {
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
    }),
    forward: action.bound(function () {
      this.moment = this.moment.clone().add(1, 'month');
    }),
    backward: action.bound(function () {
      this.moment = this.moment.clone().subtract(1, 'month');
    }),
    reset: action.bound(function () {
      this.moment = moment(date);
    })
  });
}

export default calendar();
