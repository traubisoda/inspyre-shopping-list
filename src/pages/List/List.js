import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../common/icons';
import PageHead from '../../common/PageHead';
import DeleteModal from './DeleteModal';
import ShoppingList from './ShoppingList';
import { fetchShoppingList } from './shoppingListSlice';

const getItems = (state) => state.shoppingList.items;
const getStatus = (state) => state.shoppingList.status;

const List = () => {
  const items = useSelector(getItems);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  const router = useHistory();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchShoppingList());
    }
  }, [items, dispatch]);

  if (status === 'loading') {
    return (
      <div className="text-center p-5">
        <Loading className="w-10 h-10 inline-block" />
      </div>
    );
  }

  return (
    <>
      <PageHead
        title="Items"
        action={{ label: 'New item', callback: () => router.push('/new') }}
      />
      <ShoppingList items={items} />
      {status === 'deleting' && <DeleteModal />}
    </>
  );
};

export default List;
