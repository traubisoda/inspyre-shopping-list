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

export default ShoppingList;
