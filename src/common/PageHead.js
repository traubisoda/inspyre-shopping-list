import { Link } from 'react-router-dom';
import { Back } from './icons';
import Button from './Button';

const PageHead = ({ title, action, hasBack }) => (
  <div className="flex items-center justify-between my-3">
    <h1 className="text-2xl font-display flex-1">
      {hasBack && (
        <Link to="/">
          <Back className="inline-block w-6 h-6 mr-2" />
        </Link>
      )}
      {title}
    </h1>
    {action && <Button>{action.label}</Button>}
  </div>
);

export default PageHead;
