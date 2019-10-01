import PropTypes from 'prop-types';
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
  minDate: Date;
  selectedDate?: Date;
  selectedTime?: Date;
  submitDisabled: boolean;
  changeDateHandler: (date: Date) => void;
  changeTimeHandler: (date: Date) => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CountdownForm: React.FC<FormProps> = props => {
  const {
    inputNameDate,
    inputNameTime,
    formatDate,
    formatTime,
    minDate,
    selectedDate,
    selectedTime,
    submitDisabled,
    changeDateHandler,
    changeTimeHandler,
    submitHandler,
  } = props;

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
            onChange={changeDateHandler}
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
            onChange={changeTimeHandler}
            invalidDateMessage="Invalid Time Format"
            fullWidth
            margin="normal"
            inputVariant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            disabled={submitDisabled}
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

CountdownForm.defaultProps = {
  selectedDate: new Date(),
  selectedTime: new Date(),
};

CountdownForm.propTypes = {
  inputNameDate: PropTypes.string.isRequired,
  inputNameTime: PropTypes.string.isRequired,
  formatDate: PropTypes.string.isRequired,
  formatTime: PropTypes.string.isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  selectedTime: PropTypes.instanceOf(Date),
  submitDisabled: PropTypes.bool.isRequired,
  changeDateHandler: PropTypes.func.isRequired,
  changeTimeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default CountdownForm;
