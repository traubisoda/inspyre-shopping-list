import Button from './Button';
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

export default SaveButton;
