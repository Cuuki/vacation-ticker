import PropTypes from 'prop-types';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

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
  // TODO: pass min date and default date from container and use in validation
  const minDate = new Date().setDate(new Date().getDate() + 1);
  const defaultDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
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
            margin="normal"
            label="Date picker dialog"
            format={formatDate}
            value={selectedDate}
            name={inputNameDate}
            required
            fullWidth
            inputVariant="outlined"
            onChange={handleDateChange}
            minDate={minDate}
            minDateMessage="Date should be after tomorrow"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="Time picker (Optional)"
            format={formatTime}
            value={selectedTime}
            name={inputNameTime}
            fullWidth
            inputVariant="outlined"
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
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
