import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const togglePropTypes = {
  edge: PropTypes.oneOf(['start', 'end', false]),
};

const toggleDefaultProps = {
  edge: false,
};

const DarkModeToggle = props => {
  const {edge} = props;

  return (
    <>
      <Tooltip title="Switch to dark mode">
        <IconButton color="inherit" aria-label="dark mode" edge={edge}>
          <Brightness4Icon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Switch to light mode" hidden>
        <IconButton color="inherit" aria-label="light mode" edge={edge}>
          <Brightness7Icon />
        </IconButton>
      </Tooltip>
    </>
  );
};

DarkModeToggle.propTypes = togglePropTypes;
DarkModeToggle.defaultProps = toggleDefaultProps;

export default DarkModeToggle;
