import React from 'react';

import isValid from 'date-fns/isValid';
import differenceInSeconds from 'date-fns/differenceInSeconds';

import {getTimeUntilObject} from '@utils/date';

import CountdownTicker from './CountdownTicker';

interface TickerContainerProps {
  startDate: boolean | Date;
}

interface TickerContainerState {
  timeRemaining: number;
}

interface DisplayDateObj {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

class CountdownTickerContainer extends React.Component<
  TickerContainerProps,
  TickerContainerState
> {
  private interval: number;

  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.getTimeRemaining(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  private getTimeRemaining(): number {
    const {startDate} = this.props;

    if (startDate && isValid(startDate)) {
      return differenceInSeconds(startDate as Date, new Date());
    }

    return 0;
  }

  private getDisplayDates(): DisplayDateObj {
    const {startDate} = this.props;

    // TODO: add year and month prediction
    // Determine how many full years we have
    // Determine how many days are in each year
    // Determine how many days are left -> these are for the months
    // If leap year then year has 366 otherwise 365
    // Determine how many months the days form by using avg. from days in year / 12

    if (startDate && isValid(startDate)) {
      return getTimeUntilObject(startDate as Date);
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  private tick() {
    this.setState(prevState => ({
      timeRemaining: prevState.timeRemaining - 1,
    }));
  }

  render() {
    const displayDates = this.getDisplayDates();

    return (
      <>
        <CountdownTicker displayDates={displayDates} />
      </>
    );
  }
}

export default CountdownTickerContainer;
