import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const CountdownForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form>
          <KeyboardDatePicker
            margin="normal"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
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
            value={selectedDate}
            fullWidth
            inputVariant="outlined"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Start
          </Button>
        </form>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default CountdownForm;
