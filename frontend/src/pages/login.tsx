import { Form, Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Button, Head, Input } from '../components';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';
import { toErrorMap, withApollo } from '../utils';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <>
      <Head
        title='Photo App | Login'
        description='Login to access the awesomeness'
      />
      <div className='container flex flex-col center-object'>
        <div className='flex flex-col justify-center items-center cursor-text mb-96 md:mb-28'>
          <Formik
            initialValues={{ usernameOrEmail: '', password: '' }}
            onSubmit={async (values, { setErrors }) => {
              const response = await login({
                variables: values,
                update: (cache, { data }) => {
                  cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: 'Query',
                      me: data?.login.user,
                    },
                  });
                },
              });
              if (response.data?.login.errors) {
                setErrors(toErrorMap(response.data.login.errors));
              } else if (response.data?.login.user) {
                if (typeof router.query.next === 'string') {
                  router.push(router.query.next);
                } else {
                  // worked
                  router.push('/home');
                }
              }
            }}
          >
            {({ handleChange, values }) => (
              <Form className='container md:w-2/4'>
                <div className='flex flex-col ml-2 mb-1'>
                  <h1 className='text-left font-light mb-8'>Log in</h1>
                </div>

                <div>
                  <Input
                    type='email'
                    placeHolder='Username or email'
                    name='usernameOrEmail'
                    value={values.usernameOrEmail}
                    onChange={handleChange}
                    id='email'
                  />
                </div>
                <div className='my-4'>
                  <Input
                    type='password'
                    placeHolder='*******'
                    name='password'
                    autoComplete={values.password}
                    value={values.password}
                    onChange={handleChange}
                    id='password'
                  />
                </div>

                <div className='px-3'>
                  <Button type='submit' btnType='primary'>
                    LOG IN
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default withApollo({ ssr: false })(Login);
