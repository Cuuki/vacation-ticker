import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {getTimeRemainingUntil} from '@utils/date';
import {formatNumberToLength} from '@utils/format';
import isValid from 'date-fns/isValid';

interface TickerProps {
  startDate: boolean | Date;
}

const CountdownTicker: React.FC<TickerProps> = props => {
  const {startDate} = props;

  let displayDates = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (startDate && isValid(startDate)) {
    const startDateAsDate = startDate as Date;
    const timeRemaing = getTimeRemainingUntil(startDateAsDate);
    displayDates = Object.assign(displayDates, timeRemaing);

    // TODO: add year and month prediction
    // Determine how many full years we have
    // Determine how many days are in each year
    // Determine how many days are left -> these are for the months
    // If leap year then year has 366 otherwise 365
    // Determine how many months the days form by using average from days in year
  }

  const highestLength = Math.max(...Object.values(displayDates)).toString()
    .length;

  return (
    <>
      <Box mb={3} fontFamily="Monospace">
        {displayDates.years > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {formatNumberToLength(displayDates.years, highestLength)} Years
          </Typography>
        )}
        {displayDates.months > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {formatNumberToLength(displayDates.months, highestLength)} Months
          </Typography>
        )}
        {displayDates.days > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {formatNumberToLength(displayDates.days, highestLength)} Days
          </Typography>
        )}
        {displayDates.hours > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {formatNumberToLength(displayDates.hours, highestLength)} Hours
          </Typography>
        )}
        {displayDates.minutes > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {formatNumberToLength(displayDates.minutes, highestLength)} Minutes
          </Typography>
        )}
        {displayDates.seconds > 0 && (
          <Typography component="p" variant="body2">
            {formatNumberToLength(displayDates.seconds, highestLength)} Seconds
          </Typography>
        )}
      </Box>
      <Button variant="outlined" color="primary">
        Clear
      </Button>
    </>
  );
};

CountdownTicker.defaultProps = {
  startDate: false,
};

CountdownTicker.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(Date)]),
};

export default CountdownTicker;
