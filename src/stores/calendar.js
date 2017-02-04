import { action, computed, observable } from 'mobx';
import { range } from 'lodash';
import moment from 'moment';

export function calendar(date) {
  return observable({
    moment: moment(date),
    endDateOfThisMonth: computed(function () {
      return this.moment.endOf('month').date();
    }),
    daysBeforeThisMonth: computed(function () {
      return this.moment.startOf('month').day();
    }),
    startDateOfLastMonth: computed(function () {
      return this.endDateOfLastMonth - this.daysBeforeThisMonth;
    }),
    endDateOfLastMonth: computed(function () {
      return moment(this.moment).subtract(1, 'months').endOf('month').date();
    }),
    days: computed(function () {
      const days = [];
      let current = false;
      // add previous month
      days.push(...range(this.startDateOfLastMonth + 1, this.endDateOfLastMonth + 1));
      // add current month
      days.push(...range(1, this.endDateOfThisMonth + 1));
      // add next month
      days.push(...range(1, 42 - days.length + 1));
      // map days to keep track of related month
      return days.map(day => {
        // flip day current at beginning of month
        current = day === 1 ? (!current) : current;
        // return object of information about day
        return { num: day, current };
      });
    }),
    weeks: computed(function () {
      const weeks = [];
      let week = [];
      // iterate all days
      this.days.forEach((day) => {
        // add day to week
        week.push(day);
        // move to next week
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
      });
      // return days broken into week long chunks
      return weeks;
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
