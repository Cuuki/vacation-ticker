import React from 'react';

import isValid from 'date-fns/isValid';

import parseISO from 'date-fns/parseISO';
import isAfter from 'date-fns/isAfter';

import {setMidnight, convertToISOString} from '@utils/date';

import CountdownForm from './CountdownForm';

interface FormContainerProps {
  inputNameDate: string;
  inputNameTime: string;
  formatDate: string;
  formatTime: string;
  minDate: Date;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface FormContainerState {
  selectedDate: Date;
  selectedTime: Date;
  submitDisabled: boolean;
}

class CountdownFormContainer extends React.Component<
  FormContainerProps,
  FormContainerState
> {
  constructor(props) {
    super(props);

    const {minDate} = this.props;

    this.state = {
      selectedDate: minDate,
      selectedTime: minDate,
      submitDisabled: false,
    };

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
  }

  handleChangeDate(date: Date): void {
    const {minDate} = this.props;
    const minDateISO = convertToISOString(minDate);
    const dateAtMidnight = setMidnight(date);
    const dateISO = convertToISOString(date);
    const isMinAfterDate = isAfter(parseISO(minDateISO), parseISO(dateISO));

    this.setState({
      submitDisabled: !isValid(date) || isMinAfterDate,
      selectedDate: dateAtMidnight,
    });
  }

  handleChangeTime(date: Date): void {
    this.setState({
      selectedTime: date,
    });
  }

  render() {
    const {
      inputNameDate,
      inputNameTime,
      formatDate,
      formatTime,
      minDate,
      submitHandler,
    } = this.props;

    const {selectedDate, selectedTime, submitDisabled} = this.state;

    return (
      <>
        <CountdownForm
          inputNameDate={inputNameDate}
          inputNameTime={inputNameTime}
          formatDate={formatDate}
          formatTime={formatTime}
          minDate={minDate}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          submitDisabled={submitDisabled}
          changeDateHandler={this.handleChangeDate}
          changeTimeHandler={this.handleChangeTime}
          submitHandler={submitHandler}
        />
      </>
    );
  }
}

export default CountdownFormContainer;
