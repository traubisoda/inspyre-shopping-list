import PageHead from '../../common/PageHead';
import Stepper from './Stepper';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './newItemSlice';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const Create = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <PageHead title="New item" hasBack={true} />
      <Stepper
        steps={[
          { key: 'step-1', name: 'What is it?', component: <StepOne /> },
          {
            key: 'step-2',
            name: 'When is the due date?',
            component: <StepTwo />,
          },
          {
            key: 'step-3',
            name: 'Who should buy it?',
            component: <StepThree />,
          },
        ]}
      />
    </>
  );
};

export default Create;
