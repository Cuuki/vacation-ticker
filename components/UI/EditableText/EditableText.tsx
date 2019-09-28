import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

interface EditableTextProps {
  standardText?: string;
}

const EditableText: React.FC<EditableTextProps> = props => {
  const {standardText} = props;

  return (
    <>
      <Box component="span" display="flex" alignItems="center">
        <span>{standardText}</span>

        <Tooltip title="Edit text">
          <IconButton color="inherit" edge="end">
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

EditableText.propTypes = {
  standardText: PropTypes.string,
};

EditableText.defaultProps = {
  standardText: 'My vacation',
};

export default EditableText;
