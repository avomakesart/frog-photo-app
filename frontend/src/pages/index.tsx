import React from 'react';
import { Head, HeroHome } from '../components';

export default function Home() {
  return (
    <>
      <Head
        title='Photo App'
        description='Register or login to access all the resources'
      />
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <HeroHome />
      </div>
    </>
  );
}
