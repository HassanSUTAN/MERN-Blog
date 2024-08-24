import React from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      {/* Logo and Blog Title */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Sultan's
        </span>
        Blog
      </Link>

      {/* Search form for larger screens */}
      <form className="hidden lg:block relative">
        <TextInput type="text" placeholder="Search..." className="pl-8 pr-2" />
        <AiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
      </form>

      {/* Search button for smaller screens */}
      <Button className="w-14 h-12 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Right-side buttons */}
      <div className="flex gap-2 md:order-2">
        {/* Theme toggle button */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        {/* Sign-in button */}
        <Link to="/sign-in">
          <Button outline gradientDuoTone="purpleToPink">
            Sign In
          </Button>
        </Link>
      </div>

      {/* Collapsible Menu for smaller screens */}
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
