import DateFnsUtils from '@date-io/date-fns';

const dateUtils = new DateFnsUtils();

export const getParsedDateFromString = (
  date: string,
  format: string
): Date | boolean => {
  const newDate: Date = dateUtils.parse(date, format);

  if (!dateUtils.isValid(newDate)) {
    return false;
  }

  return newDate;
};

export default {};
