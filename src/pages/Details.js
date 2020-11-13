import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageHead from '../components/PageHead';
import ItemDetails from '../components/ItemDetails';
import { fetchItemById } from '../detailsSlice';

const getItem = (state) => state.details.item;
const getStatus = (state) => state.details.status;

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(getItem);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [id, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHead title="Items" hasBack={true} />
      {item && <ItemDetails item={item} />}
    </>
  );
};

export default Details;
