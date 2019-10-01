import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CountdownForm from '@components/Countdown/CountdownForm';
import CountdownTicker from '@components/Countdown/CountdownTicker';
import EditableText from '@components/UI/EditableText';

import addDays from 'date-fns/addDays';
import {setMidnight} from '@utils/date';

interface CountdownProps {
  dateName?: string;
  timeName?: string;
  dateFormat?: string;
  timeFormat?: string;
  minDate?: Date;
  startDate: boolean | Date;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  clearHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

const Countdown: React.FC<CountdownProps> = props => {
  const {
    dateName,
    timeName,
    dateFormat,
    timeFormat,
    minDate,
    startDate,
    submitHandler,
    clearHandler,
  } = props;

  const boxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    p: 4.5,
  };
  const paperAtts = {
    elevation: 2,
  };

  return (
    <>
      <Grid container spacing={6}>
        <Grid component="section" item xs={12}>
          <Paper {...paperAtts}>
            <Box {...boxProps}>
              <CountdownForm
                inputNameDate={dateName}
                inputNameTime={timeName}
                formatDate={dateFormat}
                formatTime={timeFormat}
                minDate={minDate}
                submitHandler={submitHandler}
              />
            </Box>
          </Paper>
        </Grid>

        {startDate && (
          <Grid component="section" item xs={12}>
            <Paper {...paperAtts}>
              <Box
                {...boxProps}
                component="article"
                bgcolor="secondary.light"
                color="secondary.dark"
                borderRadius="inherit">
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom>
                  <EditableText />
                </Typography>
                <Typography component="div" variant="body1" gutterBottom>
                  <CountdownTicker startDate={startDate} />
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={clearHandler}>
                  Clear
                </Button>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </>
  );
};

Countdown.defaultProps = {
  dateName: 'countdown_date',
  timeName: 'countdown_time',
  dateFormat: 'dd.MM.yyyy',
  timeFormat: 'HH:mm',
  minDate: addDays(setMidnight(), 1),
};

Countdown.propTypes = {
  dateName: PropTypes.string,
  timeName: PropTypes.string,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(Date)])
    .isRequired,
  submitHandler: PropTypes.func.isRequired,
  clearHandler: PropTypes.func.isRequired,
};

export default Countdown;
