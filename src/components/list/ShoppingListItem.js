import { Link } from 'react-router-dom';
import { Delete } from '../icons';

const ShoppingListItem = ({ item }) => (
  <div className="bg-white shadow-lg mb-3 p-5 flex items-center justify-between border border-gray-light">
    <div>
      <div className="text-black">
        <Link to={`/item/${item.id}`}>{item.name}</Link>
      </div>
      <div className="text-gray-medium">{item.assignedTo.name}</div>
    </div>
    <Delete className="w-6 h-6" />
  </div>
);

export default ShoppingListItem;
