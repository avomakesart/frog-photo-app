import { Formik } from 'formik';
import React from 'react';
import { Button, Head, Input, NavBar } from '../../components';
import { CardForm } from '../../components/CardForm/CardForm';
import { useMeQuery, useUpdateUserMutation } from '../../generated/graphql';
import { useIsAuth } from '../../hooks';
import { withApollo } from '../../utils';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  useIsAuth();
  const { data, loading, error } = useMeQuery();
  const [updateUser] = useUpdateUserMutation();

  const userData = data?.me;
  const userBio =
    userData?.bio === null ? 'No hay biografia aun' : userData?.bio;

  return (
    <>
      <Head
        title='Photo App | Settings'
        description='Edit all of your information'
      />
      <NavBar />
      <div className='container mt-8 mx-auto lg:px-52'>
        {error && (
          <div className='center-object'>
            <img
              src='https://media.giphy.com/media/jsfBiYnT0asLZNxqMZ/giphy.gif'
              alt='loading...'
              className='max-w-full w-40'
            />
            <h2 className='mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
              Loading your data
            </h2>
          </div>
        )}
        {loading ? (
          <div className='center-object'>
            <img
              src='https://media.giphy.com/media/jsfBiYnT0asLZNxqMZ/giphy.gif'
              alt='loading...'
              className='max-w-full w-40'
            />
            <h2 className='mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font'>
              Loading your data
            </h2>
          </div>
        ) : (
          <Formik
            initialValues={{
              firstName: data?.me?.firstName,
              lastName: userData?.lastName,
              username: userData?.username,
              email: userData?.email,
              bio: userBio,
              pictureUrl: userData?.pictureUrl,
            }}
            onSubmit={async (values) => {
              await updateUser({
                variables: {
                  id: userData?.id as number,
                  input: values as any,
                },
              });
            }}
          >
            {({ handleChange }) => (
              <CardForm formTitle='Update your user data'>
                <div>
                  <Input
                    label='Nombre'
                    htmlFor='nombre'
                    type='text'
                    name='firstName'
                    value={userData?.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className='mt-4'>
                  <Input
                    label='Apellido'
                    htmlFor='apellido'
                    type='text'
                    name='lastName'
                    value={userData?.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className='mt-4'>
                  <Input
                    label='Correo electrónico'
                    htmlFor='correoElectronico'
                    type='text'
                    name='email'
                    value={userData?.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='mt-4'>
                  <Input
                    label='Biografia'
                    htmlFor='biografia'
                    type='text'
                    name='bio'
                    value={userBio}
                    onChange={handleChange}
                  />
                </div>
                <div className='mt-4'>
                  <Input
                    label='Foto de perfil'
                    htmlFor='foto'
                    type='text'
                    name='pictureUrl'
                    value={userData?.pictureUrl}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type='submit'
                  btnType='primary'
                  className='uppercase mt-10'
                >
                  Update Data
                </Button>
              </CardForm>
            )}
          </Formik>
        )}
      </div>
    </>
  );
};

export default withApollo({ ssr: false })(Settings);
