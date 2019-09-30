import DateFnsUtils from '@date-io/date-fns';

export const setMidnight = (date = new Date()): Date => {
  const dateUtils = new DateFnsUtils();

  return dateUtils.setHours(
    dateUtils.setMinutes(dateUtils.setSeconds(date, 0), 0),
    0
  );
};

export default {};
