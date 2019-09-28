import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

interface MainProps {
  children: any;
}

const mainPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Main: React.FC<MainProps> = props => {
  const {children} = props;

  return (
    <>
      <Box display="flex" flexDirection="column" component="main" role="main">
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
};

Main.propTypes = mainPropTypes;

export default Main;
