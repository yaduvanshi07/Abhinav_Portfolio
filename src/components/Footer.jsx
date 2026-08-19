import React from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-[#09090B] py-10 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-white text-[18px] font-bold tracking-wider font-heading">Abhinav Kumar Yadav</p>
          <p className="text-secondary text-[13px] font-light">
            Full Stack Developer | Software Engineer
          </p>
        </div>

        {/* Right Side Social Links */}
        <div className="flex items-center gap-3.5">
          <a
            href="https://github.com/yaduvanshi07"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#3B82F6] text-secondary hover:text-white transition-all flex items-center justify-center border border-white/10"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#3B82F6] text-secondary hover:text-white transition-all flex items-center justify-center border border-white/10"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href="mailto:abhinavyaduvanshi05@gmail.com"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#3B82F6] text-secondary hover:text-white transition-all flex items-center justify-center border border-white/10"
            aria-label="Email Abhinav"
          >
            <FaEnvelope className="w-3.5 h-3.5" />
          </a>
          <a
            href="tel:9336158912"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#3B82F6] text-secondary hover:text-white transition-all flex items-center justify-center border border-white/10"
            aria-label="Call Abhinav"
          >
            <FaPhoneAlt className="w-3.5 h-3.5" />
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
