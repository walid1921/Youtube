import { useState } from 'react'
import Hamburger from 'hamburger-react'
import {
  HiOutlineVideoCamera,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineMicrophone,
  HiOutlineSearch,
  HiChevronLeft,
} from 'react-icons/hi'

import Logo from '../assets/logo.png'
import { Button } from '../components/Button'

export function HeaderPage() {
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <div className="flex gap-10 lg:gap-20 justify-between mt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0  ${showSearchBar ? 'hidden' : 'flex'}`}
      >
        <Button variant="ghost" size="icon">
          <Hamburger size={20} direction="right" />
        </Button>
        <a href="/">
          <img src={Logo} alt="logo" className="h-6" />
        </a>
      </div>

      <form
        className={` gap-4 items-center justify-center flex-grow  ${showSearchBar ? 'flex' : 'hidden md:flex'}`}
      >
        {showSearchBar && (
          <Button
            onClick={() => setShowSearchBar(false)}
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
            type="button"
          >
            <HiChevronLeft size={25} className="m-2" />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            className="border border-secondary-border shadow-inner shadow-secondary rounded-l-full py-1 px-4 text-lg w-full outline-none focus:border-blue-500"
            placeholder="Search"
          />
          <Button className=" px-4 rounded-r-full border-secondary-border border border-l-0">
            <HiOutlineSearch size={25} />
          </Button>
        </div>

        <Button size="icon" className="flex-shrink-0" type="button">
          <HiOutlineMicrophone size={25} className="m-2" />
        </Button>
      </form>

      <div
        className={`items-center md:gap-2 flex-shrink-0 ${showSearchBar ? 'hidden' : 'flex'} `}
      >
        <Button
          onClick={() => setShowSearchBar(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <HiOutlineSearch size={25} className="m-2" />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <HiOutlineMicrophone size={25} className="m-2 md:hidden" />
        </Button>
        <Button variant="ghost" size="icon">
          <HiOutlineVideoCamera size={25} className="m-2" />
        </Button>
        <Button variant="ghost" size="icon">
          <HiOutlineBell size={25} className="m-2" />
        </Button>
        <Button variant="ghost" size="icon">
          <HiOutlineUser size={25} className="m-2" />
        </Button>
      </div>
    </div>
  )
}
