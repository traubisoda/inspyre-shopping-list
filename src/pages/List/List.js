import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageHead from '../../common/PageHead';
import ShoppingList from './ShoppingList';
import { fetchShoppingList } from './shoppingListSlice';

const selectItems = (state) => state.shoppingList.items;
const selectStatus = (state) => state.shoppingList.status;

const List = () => {
  const items = useSelector(selectItems);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const router = useHistory();

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
      <PageHead
        title="Items"
        action={{ label: 'New item', callback: () => router.push('/new') }}
      />
      <ShoppingList items={items} />
    </>
  );
};

export default List;
