import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {formatNumberToLength} from '@utils/format';

interface TickerProps {
  displayDates: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const CountdownTicker: React.FC<TickerProps> = props => {
  const {displayDates} = props;
  const highestLength = Math.max(...Object.values(displayDates)).toString()
    .length;

  return (
    <>
      <Box mb={3} fontFamily="Monospace">
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

CountdownTicker.propTypes = {
  displayDates: PropTypes.exact({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }).isRequired,
};

export default CountdownTicker;
