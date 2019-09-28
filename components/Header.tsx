import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TimerIcon from '@material-ui/icons/Timer';
import Brightness4Icon from '@material-ui/icons/Brightness4';

interface HeaderProps {
  brandName: string;
}

const headerPropTypes = {
  brandName: PropTypes.string.isRequired,
};

const Header: React.FC<HeaderProps> = props => {
  const {brandName} = props;

  return (
    <>
      <AppBar
        component="header"
        className="SiteHeader"
        position="sticky"
        color="primary">
        <Container maxWidth="md">
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={0}>
            <Grid item xs>
              <Box display="flex" alignItems="center">
                <TimerIcon fontSize="large" />
                <Box ml={1} component="span">
                  {brandName}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Tooltip title="Switch to dark mode">
                  <IconButton color="inherit" aria-label="dark mode">
                    <Brightness4Icon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

Header.propTypes = headerPropTypes;

export default Header;
