import { useEffect, useState } from 'react';
import apiClient from '../apiClient';
import PageHead from '../components/PageHead';
import ShoppingList from '../components/list/ShoppingList';

const List = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const resp = await apiClient.get('/items');
      setItems(resp.data.data);
    };

    fetch();
  }, []);

  return (
    <>
      <PageHead title="Items" action={{ label: 'New item' }} />
      <ShoppingList items={items} />
    </>
  );
};

export default List;
