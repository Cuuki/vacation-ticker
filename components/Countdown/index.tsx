import React from 'react';

import addDays from 'date-fns/addDays';
import parse from 'date-fns/parse';
import isValid from 'date-fns/isValid';
import format from 'date-fns/format';

import {getElementByName} from '@utils/element';
import {setMidnight} from '@utils/date';

import Countdown from './Countdown';

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

class CountdownContainer extends React.Component<
  CountdownProps,
  CountdownState
> {
  static defaultProps: CountdownDefaultProps = {
    dateName: 'countdown_date',
    timeName: 'countdown_time',
    dateFormat: 'dd.MM.yyyy',
    timeFormat: 'HH:mm',
    minDate: addDays(setMidnight(), 1),
  };

  constructor(props) {
    super(props);
    this.state = {startDate: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  private buildStartDate(date, time): Date | boolean {
    const {dateFormat, timeFormat} = this.props;
    const datetimeFormat = `${dateFormat} ${timeFormat}`;
    const backupDate = new Date();
    const parsedDate = parse(date, dateFormat, backupDate);
    const parsedTime = parse(time, timeFormat, backupDate);

    if (isValid(parsedDate)) {
      let datetime;

      if (isValid(parsedTime)) {
        datetime = `${date} ${time}`;
      } else {
        datetime = `${date} ${format(setMidnight(), timeFormat)}`;
      }

      let newStartDate: Date | boolean = parse(
        datetime,
        datetimeFormat,
        backupDate
      );

      if (!isValid(newStartDate)) {
        newStartDate = false;
      }

      return newStartDate;
    }

    return false;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const {dateName, timeName} = this.props;

    const form: HTMLElement = event.currentTarget;
    const dateInput: HTMLElement = getElementByName(dateName, form);
    const timeInput: HTMLElement = getElementByName(timeName, form);

    this.setState({
      startDate: this.buildStartDate(
        dateInput.getAttribute('value'),
        timeInput.getAttribute('value')
      ),
    });
  }

  handleClear(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();

    this.setState({
      startDate: false,
    });
  }

  render() {
    const {dateName, timeName, dateFormat, timeFormat, minDate} = this.props;
    const {startDate} = this.state;

    return (
      <>
        <Countdown
          dateName={dateName}
          timeName={timeName}
          dateFormat={dateFormat}
          timeFormat={timeFormat}
          minDate={minDate}
          startDate={startDate}
          submitHandler={this.handleSubmit}
          clearHandler={this.handleClear}
        />
      </>
    );
  }
}

export default CountdownContainer;
