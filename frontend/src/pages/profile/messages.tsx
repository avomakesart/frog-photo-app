import { useRouter } from 'next/router';
import React from 'react';
import { Button, NavBar } from '../../components';
import { useIsAuth } from '../../hooks';
import { withApollo } from '../../utils';

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = ({}) => {
  useIsAuth();
  const router = useRouter();
  return (
    <>
      <NavBar />

      <div className='center-object text-center'>
        <h2 className='font-medium'>This section it is on development</h2>
        <h4 className='font-light mt-5'>
          Come back later to see the awesomeness
        </h4>
        <Button
          type='button'
          btnType='primary'
          className='uppercase mt-10'
          onClick={() => router.back()}
        >
          Go back
        </Button>
      </div>
    </>
  );
};

export default withApollo({ ssr: false })(Messages);
