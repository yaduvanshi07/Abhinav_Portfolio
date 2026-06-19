import { useState } from 'react'
import { Link } from 'react-scroll'
import { close, menu } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../styles'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="hero"
          smooth
          duration={500}
          offset={-100}
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
          }}
        >
          <div className="cursor-pointer">
            <p className="text-white text-[22px] font-extrabold tracking-wide uppercase leading-tight">
              ABHINAV KUMAR YADAV
            </p>
            <p className="text-[#915eff] text-[12px] font-medium tracking-[0.15em] uppercase">
              Software Engineer
            </p>
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-1 items-center border border-[#915eff]/40 rounded-full px-2 py-1.5 bg-white/[0.03] backdrop-blur-sm">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white bg-[#915eff]/20' : 'text-secondary'
              } hover:text-white hover:bg-[#915eff]/10 text-[13px] font-medium cursor-pointer px-3 py-1.5 rounded-full transition-all duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.id} smooth duration={500} offset={-100}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <Link to={nav.id} smooth duration={500} offset={-100}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

