import {FooterProps, footerPropTypes} from '@components/Footer/types';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import FooterBrand from '@components/Footer/FooterBrand';
import FooterCopyright from '@components/Footer/FooterCopyright';

const Footer: React.FC<FooterProps> = props => {
  const {brandName} = props;
  const boxAtts = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <AppBar
        component="footer"
        className="SiteFooter"
        position="static"
        color="secondary">
        <Container maxWidth="md">
          <Box {...boxAtts} justifyContent="space-between" py={2.5}>
            <FooterBrand />
            <Box ml={2} textAlign="right">
              <FooterCopyright brandName={brandName} />
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

Footer.propTypes = footerPropTypes;

export default Footer;
