import {HeaderProps, headerPropTypes} from '@components/Header/types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import HeaderBrand from '@components/Header/HeaderBrand';
import DarkModeToggle from '@components/UI/DarkModeToggle';

const Header: React.FC<HeaderProps> = props => {
  const {brandName} = props;
  const boxAtts = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <AppBar
        component="header"
        className="SiteHeader"
        position="sticky"
        color="primary">
        <Container maxWidth="md">
          <Box {...boxAtts} justifyContent="space-between" py={2.5}>
            <Box {...boxAtts} mr={2}>
              <HeaderBrand brandName={brandName} />
            </Box>
            <Box {...boxAtts} justifyContent="flex-end">
              <DarkModeToggle edge="end" />
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

Header.propTypes = headerPropTypes;

export default Header;
