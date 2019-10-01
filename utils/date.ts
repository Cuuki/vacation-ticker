import setSeconds from 'date-fns/setSeconds';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';

import getDate from 'date-fns/getDate';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';

import differenceInSeconds from 'date-fns/differenceInSeconds';

export const setMidnight = (date = new Date()): Date => {
  return setHours(setMinutes(setSeconds(date, 0), 0), 0);
};

export interface TimeUntilObject {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}
export const getTimeUntilObject = (endDate: Date): TimeUntilObject => {
  const total = differenceInSeconds(endDate, new Date());
  const seconds = Math.floor(total % 60);
  const minutes = Math.floor((total / 60) % 60);
  const hours = Math.floor((total / (60 * 60)) % 24);
  const days = Math.floor(total / (60 * 60 * 24));

  return {seconds, minutes, hours, days};
};

export const convertToISOString = (date: Date): string => {
  const year = getYear(date)
    .toString()
    .padStart(4, '0');
  const parts = [year, getMonth(date), getDate(date)];
  const converted = parts.map(part => part.toString().padStart(2, '0'));

  return converted.join('-');
};

export default {};
