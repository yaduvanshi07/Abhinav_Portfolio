import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="w-full bg-[#050816] py-10 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-white text-[18px] font-bold tracking-wider">Abhinav Kumar Yadav</p>
          <p className="text-secondary text-[13px] font-light">
            Full Stack Developer | Software Engineer
          </p>
        </div>

        {/* Center Navigation Links */}
        {/* <div className="flex flex-wrap justify-center gap-6">
          {['About', 'Experience', 'Projects', 'Contact'].map((sec) => (
            <Link
              key={sec}
              to={sec.toLowerCase() === 'experience' ? 'work' : sec.toLowerCase()}
              smooth
              duration={500}
              offset={-100}
              className="text-secondary hover:text-[#915eff] text-sm font-medium transition-colors cursor-pointer"
            >
              {sec}
            </Link>
          ))}
        </div> */}

        {/* Right Side Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yaduvanshi07"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#915eff] text-secondary hover:text-white transition-all flex items-center justify-center border border-white/10"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#915eff] text-secondary hover:text-white transition-all flex items-center justify-center border border-white/10"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 text-center text-secondary text-[11px] font-light">
        © {new Date().getFullYear()} Abhinav Kumar Yadav. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
