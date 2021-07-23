import React from 'react';
import Link from 'next/link';
import { Button } from '..';
import { Logo } from '../../assets';

export const HeroHome = () => {
  return (
    <section className='w-full h-screen absolute hero-backdrop'>
      <div className='container flex flex-col center-object'>
        <div className='flex flex-col w-full mb-8 items-center'>
          <Logo />

          <div className='flex items-start w-full mt-12 lg:mx-auto justify-center lg:w-1/2'>
            <div className='mr-2 hero-button'>
              <Button type='button' btnType='secondary'>
                <Link href='/login'> LOG IN </Link>
              </Button>
            </div>
            <div className='hero-button'>
              <Button type='button' btnType='primary'>
                <Link href='/register'> REGISTER</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
