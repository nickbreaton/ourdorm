import Calendar, { CALENDAR_GRID } from './Calendar';

beforeEach(function () {
  this.calendar = new Calendar('2017-02-01');
});

test('end date of this month', function () {
  expect(this.calendar.endDateOfThisMonth).toEqual(28);
});

test('start date of last month', function () {
  expect(this.calendar.startDateOfLastMonth).toEqual(29);
});

test('end date of last month', function () {
  expect(this.calendar.endDateOfLastMonth).toEqual(31);
});

test('number of days before this month', function () {
  expect(this.calendar.daysBeforeThisMonth).toEqual(3);
});

test('number of days after this month', function () {
  expect(this.calendar.daysAfterThisMonth).toEqual(11);
});

test('timestamp', function () {
  expect(this.calendar.timestamp).toEqual('February 2017');
});

test('days in this month are current', function () {
  // last month
  expect(this.calendar.days[0].current).toBe(false);
  // this month
  expect(this.calendar.days[10].current).toBe(true);
  // next month
  expect(this.calendar.days[40].current).toBe(false);
});

test('number days should always be size of grid', function () {
  expect(this.calendar.days.length).toEqual(CALENDAR_GRID);
});

test('weeks have seven days', function () {
  const lastWeek = this.calendar.weeks.length - 1;
  // check first week
  expect(this.calendar.weeks[0].length).toEqual(7);
  // check last week
  expect(this.calendar.weeks[lastWeek].length).toEqual(7);
});

test('forward should change month', function () {
  this.calendar.forward(); // march
  this.calendar.forward(); // april
  expect(this.calendar.endDateOfThisMonth).toEqual(30);
});

test('backward should change month', function () {
  this.calendar.backward(); // january
  expect(this.calendar.endDateOfThisMonth).toEqual(31);
});

test('reset should revert to original month', function () {
  this.calendar.forward(); // march
  this.calendar.forward(); // april
  this.calendar.forward(); // may
  this.calendar.reset();
  expect(this.calendar.endDateOfThisMonth).toEqual(28);
});
