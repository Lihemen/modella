import React from 'react';

const NewsLetterSubscription = () => {
  return (
    <section
      id='newsletter'
      className='inner flex-col gap-y-8 flex items-center pb-20'>
      <h3 className='text-center font-serif text-3xl'>
        Subscribe to our Newsletter
      </h3>
      <p className='md:w-3/5 text-center text-sm leading-6'>
        Stay up to date with our latest issues and upcoming events. Join our
        ever growing community of dellas. Be the first to know exclusive deals{' '}
      </p>
      <div className='flex items-center justify-center flex-col md:flex-row w-full'>
        <input
          type='email'
          className='p-4 ring-1 ring-neutral-300 outline-none lg:w-4/5 w-full block'
          placeholder='Email address'
        />
        <button className='bg-neutral-900 p-4 ring-1 ring-blue-900 text-white font-semibold px-10 block w-full lg:w-max'>
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetterSubscription;
