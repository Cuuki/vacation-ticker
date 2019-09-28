import {HeaderProps, headerPropTypes} from '@components/Header/types';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import HeaderBrand from '@components/Header/HeaderBrand';
import DarkModeToggle from '@components/UI/DarkModeToggle';
import theme from '@utils/theme';

const StyledAppBar = styled(AppBar)`
  margin-bottom: ${theme.spacing(3)}px;
`;

const Header: React.FC<HeaderProps> = props => {
  const {brandName} = props;
  const boxProps = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <>
      <StyledAppBar
        component="header"
        className="SiteHeader"
        position="sticky"
        color="primary">
        <Container maxWidth="md">
          <Box {...boxProps} justifyContent="space-between" py={2.5}>
            <Box {...boxProps} mr={2}>
              <HeaderBrand brandName={brandName} />
            </Box>
            <Box {...boxProps} justifyContent="flex-end">
              <DarkModeToggle edge="end" />
            </Box>
          </Box>
        </Container>
      </StyledAppBar>
    </>
  );
};

Header.propTypes = headerPropTypes;

export default Header;
