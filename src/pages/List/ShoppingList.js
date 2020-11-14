import PropTypes from 'prop-types';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ShoppingListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ShoppingList;
