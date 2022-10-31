import Link from 'next/link'
import { useState } from 'react'
import Drawer from '../components/Drawer'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <nav className="py-4 bg-black px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="text-5xl text-white font-bold cursor-pointer"
            >
              NYC <strong className="text-green-600">DOT</strong>
            </Link>
          </div>
          <div>
            <div className="hidden lg:flex justify-between">
              <Link
                className="text-xl border py-2 px-4 rounded-xl lg:mr-5 text-white font-bold bg-blue-800 hover:bg-green-800"
                href="/racks"
                passHref
              >
                Bike Rack Types
              </Link>
              <Link
                className="text-xl border py-2 px-4 rounded-xl text-white font-bold bg-blue-800 hover:bg-green-800"
                href="/data"
                passHref
              >
                Bike Rack Data
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                className=""
                type="submit"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  className="lg:hidden"
                  src="https://ncavaliere1991.github.io/nyc-dot/hamburger.svg"
                  width={40}
                  height={40}
                  alt="Account"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col text-white gap-3 cursor-pointer">
          <Link className="text-4xl font-bold" href="/" passHref>
            NYC <strong className="text-green-600">DOT</strong>
          </Link>
          <div onClick={() => setIsOpen(false)}>
            <Link href="/" passHref>
              Home
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link href="/racks" passHref>
              Bike Rack Types
            </Link>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link href="/data" passHref>
              Bike Rack Data
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header
