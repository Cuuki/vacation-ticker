import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import theme from '../src/theme';

interface FooterProps {
  brandName: string;
}

const footerPropTypes = {
  brandName: PropTypes.string.isRequired,
};

const Footer: React.FC<FooterProps> = props => {
  const {brandName} = props;
  const currentDate: Date = new Date();
  const githubUrl = 'https://github.com/Cuuki/vacation-ticker';

  return (
    <>
      <Box
        component="footer"
        className="SiteFooter"
        position="sticky"
        bottom={0}
        zIndex="appBar"
        px={2}
        py={4}
        bgcolor="primary.dark"
        color="secondary.main">
        <Container maxWidth="md">
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={3}>
            <Grid item xs={3}>
              <Link href={githubUrl} target="_blank" rel="noopener">
                <ReactSVG
                  src="/static/github.svg"
                  beforeInjection={svg => {
                    svg.setAttribute('fill', theme.palette.secondary.main);
                    svg.setAttribute('width', '18');
                    svg.setAttribute('height', '18');
                  }}
                />
              </Link>
              <Typography variant="srOnly">Github page</Typography>
            </Grid>
            <Grid item xs>
              <Box textAlign="right">
                <Typography variant="body2" component="p">
                  &copy; {currentDate.getFullYear()} - {brandName}.<br />
                  All rights reserved.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Footer.propTypes = footerPropTypes;

export default Footer;
