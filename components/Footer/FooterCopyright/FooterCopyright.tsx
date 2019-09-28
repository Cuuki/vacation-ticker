import {FooterProps, footerPropTypes} from '@components/Footer/types';
import Typography from '@material-ui/core/Typography';

const FooterCopyright: React.FC<FooterProps> = props => {
  const {brandName} = props;
  const currentDate: Date = new Date();

  return (
    <>
      <Typography component="p" variant="body2">
        &copy; {currentDate.getFullYear()} - {brandName}.<br />
        All rights reserved.
      </Typography>
    </>
  );
};

FooterCopyright.propTypes = footerPropTypes;

export default FooterCopyright;
