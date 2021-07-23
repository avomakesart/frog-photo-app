import { Form, Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { ArrowBackIcon } from '../assets';
import { Button, Input } from '../components';
import { MeDocument, MeQuery, useRegisterMutation } from '../generated/graphql';
import { toErrorMap, withApollo } from '../utils';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const [register] = useRegisterMutation();

  const handleBack = () => {
    if (page === 4) return;
    setPage((page) => page - 1);
  };

  const handleNext = () => {
    if (page === 3) return;
    setPage((page) => page + 1);
  };

  return (
    <div className='container flex flex-col center-object'>
      <div className='flex flex-col justify-center items-center cursor-text mb-96 md:mb-28'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register({
              variables: { options: values },
              update: (cache, { data }) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    __typename: 'Query',
                    me: data?.register.user,
                  },
                });
              },
            });
            if (response.data?.register.errors) {
              setErrors(toErrorMap(response.data.register.errors));
            } else if (response.data?.register.user) {
              if (typeof router.query.next === 'string') {
                router.push(router.query.next);
              } else {
                // worked
                router.push('/account');
              }
            }
          }}
        >
          {({ handleChange, values, errors, touched }) => (
            <Form className='container md:w-2/4'>
              <div className='flex flex-col ml-2 mb-1'>
                {page !== 1 && (
                  <div className='cursor-pointer' onClick={handleBack}>
                    <ArrowBackIcon />
                  </div>
                )}
                <h1 className='text-left font-light mb-8'>Register</h1>
              </div>
              {page === 1 && (
                <>
                  <div>
                    <Input
                      name='firstName'
                      type='text'
                      placeHolder='John'
                      onChange={handleChange}
                      value={values.firstName}
                    />
                  </div>
                  <div className='my-4'>
                    <Input
                      name='lastName'
                      type='text'
                      placeHolder='Doe'
                      onChange={handleChange}
                      value={values.lastName}
                    />
                  </div>
                  {values.firstName.length && values.lastName.length > 1 ? (
                    <div className='px-3'>
                      <Button
                        type='button'
                        btnType='primary'
                        onClick={handleNext}
                      >
                        NEXT
                      </Button>
                    </div>
                  ) : (
                    <div className='px-3'>
                      <Button
                        type='button'
                        btnType='primary'
                        className='cursor-not-allowed'
                      >
                        NEXT
                      </Button>
                    </div>
                  )}
                </>
              )}

              {page === 2 && (
                <>
                  <div>
                    <Input
                      name='email'
                      type='email'
                      placeHolder='email@gmail.com'
                      onChange={handleChange}
                      value={values.email}
                    />
                  </div>
                  <div className='my-4'>
                    <Input
                      name='password'
                      type='password'
                      placeHolder='**********'
                      onChange={handleChange}
                      value={values.password}
                    />
                  </div>
                  {values.email.length && values.password.length > 1 ? (
                    <div className='px-3'>
                      <Button
                        type='button'
                        btnType='primary'
                        onClick={handleNext}
                      >
                        NEXT
                      </Button>
                    </div>
                  ) : (
                    <div className='px-3'>
                      <Button
                        type='button'
                        btnType='primary'
                        className='cursor-not-allowed'
                      >
                        NEXT
                      </Button>
                    </div>
                  )}
                </>
              )}

              {page === 3 && (
                <>
                  <div className='my-4'>
                    <Input
                      name='username'
                      type='text'
                      placeHolder='Choose your username'
                      onChange={handleChange}
                      value={values.username}
                    />
                  </div>
                </>
              )}
              {/* {page !== 3 && (
                <div className='px-3'>
                 <Button type='button' btnType='primary' onClick={handleNext}>
                    NEXT
                  </Button> 
                </div>
              )} */}
              {page === 3 && (
                <div className='flex flex-col px-3'>
                  <Button type='submit' btnType='primary'>
                    SIGN UP
                  </Button>

                  <p className='mt-6 text-base'>
                    By signing up, you agree to Photo’s Terms of Service and
                    Privacy Policy.
                  </p>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default withApollo({ ssr: false })(Register);
