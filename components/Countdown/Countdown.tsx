import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CountdownForm from '@components/Countdown/CountdownForm';
import CountdownTicker from '@components/Countdown/CountdownTicker';
import EditableText from '@components/UI/EditableText';

const Countdown: React.FC = () => {
  const boxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    p: 4.5,
  };
  const paperAtts = {
    elevation: 2,
  };

  return (
    <>
      <Grid container spacing={6}>
        <Grid component="section" item xs={12}>
          <Paper {...paperAtts}>
            <Box {...boxProps}>
              <CountdownForm />
            </Box>
          </Paper>
        </Grid>

        <Grid component="section" item xs={12}>
          <Paper {...paperAtts}>
            <Box
              {...boxProps}
              component="article"
              bgcolor="primary.light"
              color="primary.dark"
              borderRadius="inherit">
              <Typography component="h2" variant="h6" gutterBottom>
                <EditableText />
              </Typography>
              <Typography component="div" variant="body1">
                <CountdownTicker />
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Countdown;
