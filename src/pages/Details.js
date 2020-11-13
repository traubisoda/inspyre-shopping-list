import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHead from '../components/PageHead';
import ItemDetails from '../components/ItemDetails';
import apiClient from '../apiClient';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await apiClient.get(`/items/${id}`);

      setItem(response.data.data);
    };

    fetch();
  }, [id]);

  return (
    <>
      <PageHead title="Items" hasBack={true} />
      {item && <ItemDetails item={item} />}
    </>
  );
};

export default Details;
