import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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
          <Typography component="p" variant="body2">
            <Box component="strong" color="primary.dark">
              {formatNumberToLength(displayDates.days, highestLength)}
            </Box>{' '}
            Days
          </Typography>
        )}
        {displayDates.hours > 0 && (
          <Typography component="p" variant="body2">
            <Box component="strong" color="primary.dark">
              {formatNumberToLength(displayDates.hours, highestLength)}
            </Box>{' '}
            Hours
          </Typography>
        )}
        {displayDates.minutes > 0 && (
          <Typography component="p" variant="body2">
            <Box component="strong" color="primary.dark">
              {formatNumberToLength(displayDates.minutes, highestLength)}
            </Box>{' '}
            Minutes
          </Typography>
        )}
        {displayDates.seconds > 0 && (
          <Typography component="p" variant="body2">
            <Box component="strong" color="primary.dark">
              {formatNumberToLength(displayDates.seconds, highestLength)}
            </Box>{' '}
            Seconds
          </Typography>
        )}
      </Box>
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
