import DateFnsUtils from '@date-io/date-fns';

export const getParsedDateFromString = (
  date: string,
  format: string
): Date | boolean => {
  const dateUtils = new DateFnsUtils();
  const newDate: Date = dateUtils.parse(date, format);

  if (!dateUtils.isValid(newDate)) {
    return false;
  }

  return newDate;
};

export const addYearsToDate = (date: Date, years: number): Date => {
  const newDate: Date = date;
  const timestamp: number = newDate.setFullYear(newDate.getFullYear() + years);

  return new Date(timestamp);
};

export default {};
