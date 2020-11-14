import Button from './Button';
import PropTypes from 'prop-types';
import { Loading } from './icons';

const SaveButton = ({ saving, children, ...props }) => {
  if (saving) {
    return (
      <Button disabled {...props}>
        <Loading className="w-5 h-5 mr-2 inline-block" />
        Saving...
      </Button>
    );
  }

  return <Button {...props}>{children}</Button>;
};

SaveButton.propTypes = {
  saving: PropTypes.bool,
};

export default SaveButton;
