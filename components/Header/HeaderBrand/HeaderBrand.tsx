import {HeaderProps, headerPropTypes} from '@components/Header/types';
import Box from '@material-ui/core/Box';
import TimerIcon from '@material-ui/icons/Timer';

const HeaderBrand: React.FC<HeaderProps> = props => {
  const {brandName} = props;

  return (
    <>
      <TimerIcon fontSize="large" />
      <Box ml={1} component="strong" fontSize="caption.fontSize">
        {brandName}
      </Box>
    </>
  );
};

HeaderBrand.propTypes = headerPropTypes;

export default HeaderBrand;
