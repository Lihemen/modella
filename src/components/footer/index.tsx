import React from 'react';

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-300 inner-x py-4 text-xs uppercase flex justify-between items-start flex-col lg:flex-row gap-y-8'>
      <div className='flex gap-x-10 flex-col lg:flex-row lg:items-center gap-y-4'>
        <p className='flex gap-x-8 flex-col leading-8 lg:flex-row'>
          <span>
            Copyright &copy; Modella Agency {new Date().getFullYear()}{' '}
          </span>
          <span>info@modellaagency.com</span> <span>+234 701 100 9000</span>
        </p>
        <div className='grid grid-cols-4 gap-4'>
          <a
            href='http://instagram.com/modella_agency'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-125 transition'>
            <FaInstagram className='text-lg' />
          </a>
          <a
            href='http://instagram.com/modella_agency'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-125 transition'>
            <FaFacebookF className='text-lg' />
          </a>
          <a
            href='http://instagram.com/modella_agency'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-125 transition'>
            <FaWhatsapp className='text-lg' />
          </a>
          <a
            href='http://instagram.com/modella_agency'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-125 transition'>
            <FaYoutube className='text-lg' />
          </a>
        </div>
      </div>
      <div className='flex-row-reverse lg:flex-col flex gap-8 items-start lg:items-end '>
        <p className='md:w-3/5 text-[8px] text-right'>
          Keep updated on all the latest Modella models news
        </p>
        <div className='flex-col flex items-start lg:items-end gap-y-1'>
          <Link
            to='privacy-policy'
            className='hover:underline hover:underline-offset-2'>
            Privacy Policy
          </Link>
          <Link
            to='get-scouted'
            className='hover:underline hover:underline-offset-2'>
            Get Scouted
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
