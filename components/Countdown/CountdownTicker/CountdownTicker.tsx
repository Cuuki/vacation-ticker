import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const CountdownTicker: React.FC = () => {
  return (
    <>
      <Box mb={3} fontFamily="Monospace">
        <Typography component="p" variant="body2" gutterBottom>
          00 Years
        </Typography>
        <Typography component="p" variant="body2" gutterBottom>
          00 Months
        </Typography>
        <Typography component="p" variant="body2" gutterBottom>
          00 Days
        </Typography>
        <Typography component="p" variant="body2" gutterBottom>
          00 Hours
        </Typography>
        <Typography component="p" variant="body2" gutterBottom>
          00 Minutes
        </Typography>
        <Typography component="p" variant="body2">
          00 Seconds
        </Typography>
      </Box>
      <Button variant="outlined" color="primary">
        Clear
      </Button>
    </>
  );
};

export default CountdownTicker;
