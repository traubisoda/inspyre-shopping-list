import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Delete, Edit } from '../../common/icons';
import { selectItemToDelete } from './shoppingListSlice';
import { useDispatch } from 'react-redux';

const ShoppingListItem = ({ item }) => {
  const deleteRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick = (e) => {
    if (!deleteRef.current.contains(e.target)) {
      history.push(`/item/${item.id}`);
    }
  };
  const onDelete = () => dispatch(selectItemToDelete(item.id));

  return (
    <div
      className="bg-white shadow-lg mb-3 p-5 flex items-center justify-between border border-gray-light cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-1">
        <div className="text-black">{item.name}</div>
        <div className="text-gray-medium">{item.assignedTo.name}</div>
      </div>
      <Link to={`/edit/${item.id}`}>
        <Edit className="w-6 h-6" />
      </Link>
      <Delete
        className="ml-2 w-6 h-6 cursor-pointer"
        onClick={onDelete}
        ref={deleteRef}
      />
    </div>
  );
};

ShoppingListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShoppingListItem;
