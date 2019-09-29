import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CountdownForm from '@components/Countdown/CountdownForm';
import CountdownTicker from '@components/Countdown/CountdownTicker';
import EditableText from '@components/UI/EditableText';
import {getElementByName} from '@utils/element';
import {getParsedDateFromString} from '@utils/date';

interface CountdownProps {
  dateName?: string;
  timeName?: string;
  dateFormat?: string;
  timeFormat?: string;
}

interface CountdownState {
  startDate: boolean | Date;
}

type CountdownDefaultProps = {
  dateName: string;
  timeName: string;
  dateFormat: string;
  timeFormat: string;
};

class Countdown extends React.Component<CountdownProps, CountdownState> {
  static defaultProps: CountdownDefaultProps = {
    dateName: 'countdown_date',
    timeName: 'countdown_time',
    dateFormat: 'dd.MM.yyyy',
    timeFormat: 'HH:mm',
  };

  constructor(props) {
    super(props);
    this.state = {startDate: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const {dateName, timeName, dateFormat, timeFormat} = this.props;
    const form: HTMLElement = event.currentTarget;
    const dateInput: HTMLElement = getElementByName(dateName, form);
    const timeInput: HTMLElement = getElementByName(timeName, form);

    if (dateInput) {
      let date = dateInput.getAttribute('value');
      let format = dateFormat;

      if (timeInput && timeInput.getAttribute('value')) {
        format = `${dateFormat} ${timeFormat}`;
        date = `${date} ${timeInput.getAttribute('value')}`;
      }

      this.setState({
        startDate: getParsedDateFromString(date, format),
      });
    }
  }

  render() {
    const {dateName, timeName, dateFormat, timeFormat} = this.props;
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
