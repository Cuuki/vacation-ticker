import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CountdownForm from '@components/Countdown/CountdownForm';
import CountdownTicker from '@components/Countdown/CountdownTicker';
import EditableText from '@components/UI/EditableText';
import DateFnsUtils from '@date-io/date-fns';
import {getElementByName} from '@utils/element';
import {setMidnight} from '@utils/date';

interface CountdownProps {
  dateName?: string;
  timeName?: string;
  dateFormat?: string;
  timeFormat?: string;
  minDate?: Date;
}

interface CountdownState {
  startDate: boolean | Date;
}

type CountdownDefaultProps = {
  dateName: string;
  timeName: string;
  dateFormat: string;
  timeFormat: string;
  minDate: Date;
};

const dateUtils = new DateFnsUtils();

class Countdown extends React.Component<CountdownProps, CountdownState> {
  static defaultProps: CountdownDefaultProps = {
    dateName: 'countdown_date',
    timeName: 'countdown_time',
    dateFormat: 'dd.MM.yyyy',
    timeFormat: 'HH:mm',
    minDate: dateUtils.addDays(setMidnight(), 1),
  };

  constructor(props) {
    super(props);
    this.state = {startDate: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const {dateName, timeName, dateFormat, timeFormat} = this.props;
    const datetimeFormat = `${dateFormat} ${timeFormat}`;

    const form: HTMLElement = event.currentTarget;
    const dateInput: HTMLElement = getElementByName(dateName, form);
    const timeInput: HTMLElement = getElementByName(timeName, form);

    const date = dateInput.getAttribute('value');
    const time = timeInput.getAttribute('value');
    let datetime = date;
    let newStartDate: Date | boolean = false;

    if (dateUtils.isValid(dateUtils.parse(time, timeFormat))) {
      datetime = `${date} ${time}`;
    } else {
      datetime = `${date} ${dateUtils.format(setMidnight(), timeFormat)}`;
    }

    // TODO: figure out why min date check with isBefore doesn't work and ditch aria invalid
    if (
      dateUtils.isValid(dateUtils.parse(date, dateFormat)) &&
      dateInput.getAttribute('aria-invalid') === 'false'
    ) {
      newStartDate = dateUtils.parse(datetime, datetimeFormat);

      if (!dateUtils.isValid(newStartDate)) {
        newStartDate = false;
      }
    }

    this.setState({
      startDate: newStartDate,
    });
  }

  render() {
    const {dateName, timeName, dateFormat, timeFormat, minDate} = this.props;
    const {startDate} = this.state;
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
                  submitHandler={this.handleSubmit}
                />
              </Box>
            </Paper>
          </Grid>

          <Grid component="section" item xs={12}>
            <Paper {...paperAtts}>
              <Box
                {...boxProps}
                component="article"
                bgcolor="primary.light"
                color="primary.dark"
                borderRadius="inherit">
                <Typography component="h2" variant="h6" gutterBottom>
                  <EditableText />
                </Typography>
                <Typography component="div" variant="body1">
                  <CountdownTicker startDate={startDate} />
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Countdown;
