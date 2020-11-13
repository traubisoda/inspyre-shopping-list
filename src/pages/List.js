import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageHead from '../components/PageHead';
import ShoppingList from '../components/list/ShoppingList';
import { fetchShoppingList } from '../shoppingListSlice';

const selectItems = (state) => state.shoppingList.items;
const selectStatus = (state) => state.shoppingList.status;

const List = () => {
  const items = useSelector(selectItems);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchShoppingList());
    }
  }, [items, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHead title="Items" action={{ label: 'New item' }} />
      <ShoppingList items={items} />
    </>
  );
};

export default List;
