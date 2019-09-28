import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

type Mode = 'dark' | 'light';
type Label = 'dark mode' | 'light mode';

interface ToggleProps {
  edge?: false | 'end' | 'start';
}

interface ToggleState {
  label: Label;
  mode: Mode;
}

class DarkModeToggle extends React.Component<ToggleProps, ToggleState> {
  constructor(props) {
    super(props);

    this.state = {
      label: 'dark mode',
      mode: 'light',
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState(prevState => {
      const {mode} = prevState;
      let newMode: Mode;
      let newLabel: Label;

      if (mode === 'light') {
        newMode = 'dark';
        newLabel = 'light mode';
      } else {
        newMode = 'light';
        newLabel = 'dark mode';
      }

      return {
        mode: newMode,
        label: newLabel,
      };
    });
  }

  render() {
    const {edge} = this.props;
    const {mode, label} = this.state;
    let icon: JSX.Element = <Brightness7Icon />;

    if (mode === 'light') {
      icon = <Brightness4Icon />;
    }

    return (
      <>
        <Tooltip title={`Switch to ${label}`}>
          <IconButton
            color="inherit"
            aria-label={label}
            edge={edge}
            onClick={this.toggleMode}>
            {icon}
          </IconButton>
        </Tooltip>
      </>
    );
  }
}

export default DarkModeToggle;
