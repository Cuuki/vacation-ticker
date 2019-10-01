import setSeconds from 'date-fns/setSeconds';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import differenceInSeconds from 'date-fns/differenceInSeconds';

export const setMidnight = (date = new Date()): Date => {
  return setHours(setMinutes(setSeconds(date, 0), 0), 0);
};

export interface TimeRemainingObject {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}
export const getTimeRemainingUntil = (endDate: Date): TimeRemainingObject => {
  const total = differenceInSeconds(endDate, new Date());
  const seconds = Math.floor(total % 60);
  const minutes = Math.floor((total / 60) % 60);
  const hours = Math.floor((total / (60 * 60)) % 24);
  const days = Math.floor(total / (60 * 60 * 24));

  return {seconds, minutes, hours, days};
};

export default {};
