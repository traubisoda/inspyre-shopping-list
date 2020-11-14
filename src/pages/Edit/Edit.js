import { useParams } from 'react-router-dom';
import PageHead from '../../common/PageHead';
import EditForm from './EditForm';

const Edit = () => {
  const { id } = useParams();

  return (
    <>
      <PageHead title="Edit item" hasBack={true} />
      <div className="flex justify-center">
        <div className="w-full md:w-6/12 lg:w-5/12">
          <EditForm itemId={id} />
        </div>
      </div>
    </>
  );
};

export default Edit;
