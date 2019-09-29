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
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
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
            fullWidth
            inputVariant="outlined"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="Time picker"
            format={formatTime}
            value={selectedDate}
            name={inputNameTime}
            fullWidth
            inputVariant="outlined"
            onChange={handleDateChange}
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
