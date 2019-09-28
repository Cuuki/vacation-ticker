import {FooterProps, footerPropTypes} from '@components/Footer/types';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import FooterBrand from '@components/Footer/FooterBrand';
import FooterCopyright from '@components/Footer/FooterCopyright';
import theme from '@utils/theme';

const StyledAppBar = styled(AppBar)`
  margin-top: ${theme.spacing(3)}px;
`;

const Footer: React.FC<FooterProps> = props => {
  const {brandName} = props;
  const boxProps = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <StyledAppBar
        component="footer"
        className="SiteFooter"
        position="static"
        color="secondary">
        <Container maxWidth="md">
          <Box {...boxProps} justifyContent="space-between" py={2.5}>
            <FooterBrand />
            <Box ml={2} textAlign="right">
              <FooterCopyright brandName={brandName} />
            </Box>
          </Box>
        </Container>
      </StyledAppBar>
    </>
  );
};

Footer.propTypes = footerPropTypes;

export default Footer;
