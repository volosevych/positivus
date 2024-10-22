import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

import Button from '../components/Button';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      spy
      smooth
      activeClass='nav-active'
      className='transition-colors duration-500 text-p2 max-lg:text-p3 cursor-pointer hover:text-p1 max-lg:mb-5 font-medium'
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-5 items-center',
        hasScrolled && 'py-7 bg-p3 backdrop-blur-[8px]'
      )}
    >
      <div className='container flex max-lg:px-5'>
        <div className='flex justify-between items-center w-full'>
          <a href=''>
            {isOpen ? (
              <img
                src={`${process.env.PUBLIC_URL}/assets/header/WhiteLogo.png`}
                alt='logo-white'
                className='block lg:hidden z-50 relative'
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/assets/header/BlackLogo.png`}
                alt='logo'
                className='block lg:hidden z-50 relative'
              />
            )}

            {/* This is the standard logo for larger screens */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/header/BlackLogo.png`}
              alt='logo'
              className='hidden lg:block'
            />
          </a>

          <div
            className={clsx(
              'max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-screen max-lg:w-full max-lg:bg-p2 transition-transform duration-500',
              isOpen
                ? 'max-lg:translate-x-0'
                : 'max-lg:-translate-x-full max-lg:pointer-events-none max-lg:opacity-0'
            )}
          >
            <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before'>
              <nav className='flex max-lg:justify-center max-lg:items-center w-full h-full'>
                <ul className='flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:space-y-6 lg:space-x-4'>
                  <li>
                    <NavLink title='About Us' />
                  </li>

                  <li>
                    <NavLink title='Services' />
                  </li>

                  <li>
                    <NavLink title='Work Proccess' />
                  </li>

                  <li>
                    <NavLink title='Team' />
                  </li>

                  <li>
                    <NavLink title='Contact Us' />
                  </li>

                  <li>
                    <Button
                      className='bg-p3 lg:ml-5 sm:mt-10 hover:bg-p2 hover:text-p3 transition-colors duration-500'
                      id={0}
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Toggle Button for mobile devices */}
        <button
          className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/header/${isOpen ? 'x.svg' : 'burgerMenuIcon.png'}`}
            alt='menu'
            className='size-1/2 object-contain'
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

