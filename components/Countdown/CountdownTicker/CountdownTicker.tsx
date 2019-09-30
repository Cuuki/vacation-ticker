import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import differenceInSeconds from 'date-fns/differenceInSeconds';
// import differenceInDays from 'date-fns/differenceInDays';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInYears from 'date-fns/differenceInYears';

interface TickerProps {
  startDate: boolean | Date;
}

const CountdownTicker: React.FC<TickerProps> = props => {
  const {startDate} = props;

  let years = 0;
  let months = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (startDate) {
    const startDateAsDate = startDate as Date;
    const currentDate: Date = new Date();

    const diffInMonths = differenceInMonths(startDateAsDate, currentDate);
    const diffInYears = differenceInYears(startDateAsDate, currentDate);
    const diffInSec = differenceInSeconds(startDateAsDate, currentDate);

    // const daysInSec = 60 * 60 * 24;
    // const daysUntilRaw = diffInSec / daysInSec;
    let yearsUntil = years;
    let monthsUntil = months;

    if (diffInYears > 0 || diffInMonths > 0) {
      // const diffInDays = differenceInDays(startDateAsDate, currentDate);

      // Determine how many full years we have
      // Determine how many days are in each year
      // Determine how many days are left -> these are for the months
      // If leap year then year has 366 otherwise 365

      // Determine how many months the days form by using average from days in year

      if (diffInYears) {
        yearsUntil = diffInYears;
      }

      if (diffInMonths) {
        monthsUntil = diffInMonths;
      }
    }

    const secUntil = Math.floor(diffInSec % 60);
    const minUntil = Math.floor((diffInSec / 60) % 60);
    const hoursUntil = Math.floor((diffInSec / (60 * 60)) % 24);
    const daysUntil = Math.floor(diffInSec / (60 * 60 * 24));

    seconds = secUntil;
    minutes = minUntil;
    hours = hoursUntil;
    days = daysUntil;
    months = monthsUntil;
    years = yearsUntil;
  }

  return (
    <>
      <Box mb={3} fontFamily="Monospace">
        {years > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {years} Years
          </Typography>
        )}
        {months > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {months} Months
          </Typography>
        )}
        {days > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {days} Days
          </Typography>
        )}
        {hours > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {hours} Hours
          </Typography>
        )}
        {minutes > 0 && (
          <Typography component="p" variant="body2" gutterBottom>
            {minutes} Minutes
          </Typography>
        )}
        {seconds > 0 && (
          <Typography component="p" variant="body2">
            {seconds} Seconds
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
