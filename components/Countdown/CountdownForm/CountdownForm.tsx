import PropTypes from 'prop-types';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import {addYearsToDate} from '@utils/date';

interface FormProps {
  inputNameDate: string;
  inputNameTime: string;
  formatDate: string;
  formatTime: string;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CountdownForm: React.FC<FormProps> = props => {
  const {
    inputNameDate,
    inputNameTime,
    formatDate,
    formatTime,
    submitHandler,
  } = props;

  const currentDate = new Date();
  const minDate = currentDate;
  const defaultDate = addYearsToDate(minDate, 1);

  const [selectedDate, setSelectedDate] = React.useState(defaultDate);
  const [selectedTime, setSelectedTime] = React.useState(defaultDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleTimeChange = time => {
    setSelectedTime(time);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={submitHandler}>
          <KeyboardDatePicker
            label="Vacation date"
            value={selectedDate}
            name={inputNameDate}
            format={formatDate}
            minDate={minDate}
            minDateMessage="Date should be in the future"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            onChange={handleDateChange}
            required
            fullWidth
            margin="normal"
            inputVariant="outlined"
          />
          <KeyboardTimePicker
            label="Vacation time (Optional)"
            value={selectedTime}
            name={inputNameTime}
            format={formatTime}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            onChange={handleTimeChange}
            invalidDateMessage="Invalid Time Format"
            fullWidth
            margin="normal"
            inputVariant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth>
            Start
          </Button>
        </form>
      </MuiPickersUtilsProvider>
    </>
  );
};

CountdownForm.propTypes = {
  inputNameDate: PropTypes.string.isRequired,
  inputNameTime: PropTypes.string.isRequired,
  formatDate: PropTypes.string.isRequired,
  formatTime: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default CountdownForm;
