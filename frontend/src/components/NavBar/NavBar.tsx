import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { ChatIcon, HomeIcon, Logo, SearchIcon } from '../../assets';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import { UserIcon } from '../../assets/icons/UserIcon';
import { useOnClickOutside } from '../../hooks';
import { withApollo } from '../../utils';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import { useApolloClient } from '@apollo/client';
import { Loader } from '../Loader/Loader';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileRef = useRef<any>(null);
  useOnClickOutside(profileRef, () => setIsProfileDropdownOpen(false));
  const apolloClient = useApolloClient();
  const { data, loading, error } = useMeQuery();
  const [logout, { loading: logoutFetching }] = useLogoutMutation();

  const handleOpenProfileOptions = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <>
      {logoutFetching && <Loader title='Signing out' />}
      <nav className='bg-white shadow-lg hidden md:block'>
        <div className='max-width-nav mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div
                className='flex-shrink-0 flex items-center cursor-pointer'
                onClick={() => router.push('/home')}
              >
                <Logo className='h-8' />
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                onClick={() => router.push('/search')}
                className='bg-white border border-black w-8 h-8 p-1 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <span className='sr-only'>Go to search page</span>
                <SearchIcon />
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className='ml-3 relative'>
                <div>
                  <button
                    type='button'
                    className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={handleOpenProfileOptions}
                  >
                    <span className='sr-only'>Open user menu</span>
                    {error && 'Error...'}
                    {loading ? (
                      'Loading...'
                    ) : (
                      <img
                        className='h-8 w-8 rounded-full'
                        src={data?.me?.pictureUrl as any}
                        alt='User picture'
                      />
                    )}
                  </button>
                </div>

                {isProfileDropdownOpen && (
                  <div
                    className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    ref={profileRef}
                    tabIndex={-1}
                  >
                    <Link href='/profile'>
                      <span className='block cursor-pointer px-4 py-2 text-sm text-gray-700'>
                        Your Profile
                      </span>
                    </Link>
                    <Link href='/profile/settings'>
                      <span className='block cursor-pointer px-4 py-2 text-sm text-gray-700'>
                        Settings
                      </span>
                    </Link>
                    <span
                      className='block cursor-pointer px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex={-1}
                      id='user-menu-item-2'
                      onClick={async () => {
                        await logout();
                        await apolloClient.resetStore();
                      }}
                    >
                      Sign out
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className='w-full md:hidden h-full wrapper'>
        <div className='fixed bottom-0 py-2 flex justify-around w-full transition-shadow bg-white border md:px-10 hover:shadow-xl'>
          <div className='px-3 cursor-pointer md:px-6 hover:bg-gray-100'>
            <button
              onClick={() => router.push('/home')}
              className='flex flex-col py-4 text-gray-700 md:w-20'
            >
              <div className='flex justify-center'>
                <HomeIcon />
              </div>
            </button>
          </div>

          <div className='px-3 cursor-pointer md:px-6 hover:bg-blue-100'>
            <button
              onClick={() => router.push('/search')}
              className='flex flex-col py-4 text-gray-700 md:w-20'
            >
              <div className='flex justify-center'>
                <SearchIcon />
              </div>
            </button>
          </div>

          <div className='px-3 pt-2 cursor-pointer md:px-6 hover:bg-blue-100'>
            <button
              onClick={() => router.push('/home')}
              className='flex flex-col py-2 px-6 text-white md:w-20 mobile-nav-plus-button'
            >
              <div className='flex justify-center'>
                <PlusIcon />
              </div>
            </button>
          </div>

          <div className='px-3 cursor-pointer md:px-6 hover:bg-blue-100'>
            <button
              onClick={() => router.push('/profile/messages')}
              className='flex flex-col py-4 text-gray-700 md:w-20'
            >
              <div className='flex justify-center'>
                <ChatIcon />
              </div>
            </button>
          </div>

          <div className='px-3 cursor-pointer md:px-6 hover:bg-blue-100'>
            <button
              onClick={() => router.push('/profile')}
              className='flex flex-col py-4 text-gray-700 md:w-20'
            >
              <div className='flex justify-center'>
                <UserIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo({ ssr: false })(NavBar);
