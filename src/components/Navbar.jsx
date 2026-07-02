import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { close, menu } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../styles'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5 shadow-lg py-4' : 'bg-transparent'
        }`}
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
            <p className="text-white text-[22px] font-extrabold tracking-wide uppercase leading-tight font-heading">
              ABHINAV KUMAR YADAV
            </p>
            <p className="text-saffron text-[12px] font-medium tracking-[0.15em] uppercase">
              Software Engineer
            </p>
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-1 items-center border border-saffron/20 rounded-full px-2 py-1.5 bg-white/[0.02] backdrop-blur-md">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-white bg-saffron/20' : 'text-secondary'
                } hover:text-white hover:bg-saffron/10 text-[13px] font-medium cursor-pointer px-3 py-1.5 rounded-full transition-all duration-300`}
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
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? 'hidden' : 'flex'
              } p-6 bg-[#18181B]/95 backdrop-blur-md border border-[#27272A] absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-secondary'
                    } hover:text-white transition-colors duration-200`}
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

