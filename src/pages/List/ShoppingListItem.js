import { Link } from 'react-router-dom';
import { Delete, Edit } from '../../common/icons';
import { removeItemById } from './shoppingListSlice';
import { useDispatch } from 'react-redux';

const ShoppingListItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(removeItemById(item.id));

  return (
    <div className="bg-white shadow-lg mb-3 p-5 flex items-center justify-between border border-gray-light">
      <div className="flex-1">
        <div className="text-black">
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </div>
        <div className="text-gray-medium">{item.assignedTo.name}</div>
      </div>
      <Link to={`/edit/${item.id}`}>
        <Edit className="w-6 h-6" />
      </Link>
      <Delete className="ml-2 w-6 h-6 cursor-pointer" onClick={onDelete} />
    </div>
  );
};

export default ShoppingListItem;
