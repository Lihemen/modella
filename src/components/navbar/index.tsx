import { useState } from 'react';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import { IoSearchOutline, IoCaretDown } from 'react-icons/io5';

interface AppNavLinkInterface extends NavLinkProps {
  name: string;
}

interface AppNavDropDownInterface {
  name: string;
  children: Array<AppNavLinkInterface>;
}

const AppNavLink = ({ to, name, className }: AppNavLinkInterface) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${className} text-xs transition-all duration-300 uppercase whitespace-nowrap hover:underline underline-offset-8 ${
            isActive ? 'font-bold underline ' : 'font-normal'
          }`
        }>
        {name}
      </NavLink>
    </li>
  );
};

const AppNavDropDown = ({ name, children }: AppNavDropDownInterface) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const makeUrl = (parent: string, name: string) =>
    `${parent.toLowerCase()}/${name.toLowerCase()}`;
  return (
    <li onClick={() => setShowChildren((s) => !s)} className='relative'>
      <span className='cursor-pointer flex items-center pt-[3px] gap-2'>
        <span className='text-xs transition-all duration-300 uppercase whitespace-nowrap font-normal '>
          {name}
        </span>
        <IoCaretDown
          className={`transition duration-200 text-xs ${
            showChildren && 'rotate-180'
          }`}
        />
      </span>

      <ul
        className={`max-h-0 transition-[max-height] duration-300 overflow-hidden top-[120%] bg-white bg-opacity-80 backdrop-blur-xl absolute w-32 flex flex-col gap-y-4 ${
          showChildren && 'max-h-96 border border-t-0 '
        }`}>
        {children.map((child) => (
          <AppNavLink
            key={child.name}
            {...child}
            to={`${makeUrl(name, child.name)}`}
            className='py-2 px-1'
            onClick={() => setShowChildren(false)}
          />
        ))}
      </ul>
    </li>
  );
};

const Navbar = () => {
  return (
    <header className='inner sticky top-0 bg-white bg-opacity-50 z-50 backdrop-blur-md lg:py-12 border-b border-neutral-300 shadow-md lg:border-0 lg:shadow-none'>
      <nav className='flex justify-between items-center'>
        <Link to='/' className='flex-1'>
          <h1
            className='text-4xl uppercase font-semibold font-serif'
            style={{ textShadow: 'rgb(0 0 0/ 50%) 2px 5px' }}>
            Modella
          </h1>
        </Link>

        <ul className='gap-x-6 flex-1 items-center hidden lg:flex'>
          <AppNavLink to='/' name='home' />
          <AppNavLink to='/about' name='about' />
          <AppNavLink to='/gallery' name='gallery' />
          <AppNavLink to='/digital' name='digital' />
          <AppNavLink to='/get-scouted' name='get scouted' />
          <AppNavLink to='/categories' name='categories' />
          <AppNavDropDown
            name='Models'
            children={[
              { to: 'men', name: 'men' },
              { to: 'women', name: 'women' },
              { to: 'curve', name: 'curve' },
              { to: 'skinny', name: 'skinny' },
              { to: 'plus-size', name: 'plus-size' },
            ]}
          />
          <AppNavLink to='/news' name='news' />
          <AppNavLink to='/contact' name='Contact' />
        </ul>

        <div className='hidden lg:flex relative flex-1 justify-end'>
          <input
            type='text'
            placeholder='Search for a model...'
            className='p-3 pr-12 rounded-lg ring-1 ring-neutral-300 w-72 block focus:outline-none text-sm placeholder:text-sm'
          />
          <button className='text-center border border-gray-300 rounded-lg p-2 right-1 absolute top-1/2 -translate-y-1/2 text-gray-400'>
            <IoSearchOutline />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
