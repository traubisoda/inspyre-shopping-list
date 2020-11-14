import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ItemDetails from './ItemDetails';
import { fetchItemById } from './detailsSlice';
import { Loading } from '../../common/icons';
import PageHead from '../../common/PageHead';

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
    return (
      <div className="text-center p-5">
        <Loading className="w-10 h-10 inline-block" />
      </div>
    );
  }

  return (
    <>
      <PageHead title="Items" hasBack={true} />
      {item && <ItemDetails item={item} />}
    </>
  );
};

export default Details;
