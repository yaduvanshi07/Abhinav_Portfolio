import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 40 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, reverse, index, words])

  useEffect(() => {
    setText(words[index].substring(0, subIndex))
  }, [subIndex, index, words])

  return (
    <span className="text-saffron border-r-[3px] border-saffron pr-1 animate-blink font-semibold">
      {text}
    </span>
  )
}

const Hero = () => {
  const roles = ["Full Stack Developer", "Software Engineer", "Backend Developer", "AI/ML Integrator"]

  return (
    <section id="hero" className="relative w-full min-h-screen xl:h-screen mx-auto overflow-hidden flex items-center pt-[100px] sm:pt-[120px] xl:pt-0 pb-10 xl:pb-0">
      <div
        className={`relative xl:absolute xl:inset-x-0 xl:top-[120px] xl:bottom-0 ${styles.paddingX} max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[58%_38%] lg:grid-cols-[60%_40%] items-center gap-10 z-10 w-full`}
      >
        {/* Left Column: Vertical line + Text & Button Details (60%) */}
        <div className="flex flex-row items-start gap-5 w-full">
          <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
            <div className="w-5 h-5 rounded-full bg-[#3B82F6] shadow-[0_0_20px_#3B82F6]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="flex-1 space-y-4 sm:space-y-6 mt-4 sm:mt-8">
            <div>
              <p className="text-secondary text-sm sm:text-base uppercase tracking-[0.25em] font-medium mb-2">
                Bengaluru, India
              </p>
              <h1 className="font-black text-white text-[38px] sm:text-[50px] md:text-[60px] lg:text-[72px] leading-tight font-heading">
                Hi, I'm <span className="text-saffron">Abhinav</span>
              </h1>
              <div className="text-[20px] sm:text-[28px] md:text-[32px] font-bold text-white mt-1 h-[45px]">
                <Typewriter words={roles} />
              </div>
            </div>

            <p className="text-[#dfd9ff] text-[15px] sm:text-[17px] md:text-[19px] max-w-lg leading-relaxed font-light">
              Building scalable web applications, intelligent recommendation systems, and AI-powered products using MERN Stack, Node.js, MongoDB, and Machine Learning.
            </p>

            {/* CTAs and Resume Button */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://drive.google.com/file/d/1cPl_Sra45UG6jjgoJYybXSKIsWBxs0xj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#3B82F6]/80 to-[#60A5FA]/80 hover:from-[#3B82F6] hover:to-[#60A5FA] text-white px-6 py-3 rounded-full font-semibold shadow-[0_4px_15px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer z-20 group border border-[#3B82F6]/20"
              >
                <FaExternalLinkAlt className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                Resume
              </a>
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-100}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md hover:scale-105 flex items-center gap-2 cursor-pointer z-20 hover:border-[#3B82F6]/30"
              >
                Let's Talk
              </Link>
            </div>

            {/* Social Links */}
            <div className="relative z-[50] flex items-center gap-5 pt-4">
              <a
                href="https://github.com/yaduvanshi07"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-[50] w-12 h-12 rounded-full bg-[#18181B]/60 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4),0_0_40px_rgba(59,130,246,0.15)] cursor-pointer group"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5 text-secondary group-hover:text-[#3B82F6] transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-[50] w-12 h-12 rounded-full bg-[#18181B]/60 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4),0_0_40px_rgba(59,130,246,0.15)] cursor-pointer group"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-5 h-5 text-secondary group-hover:text-[#3B82F6] transition-colors duration-300" />
              </a>
              <a
                href="mailto:abhinavyaduvanshi05@gmail.com"
                className="relative z-[50] w-12 h-12 rounded-full bg-[#18181B]/60 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4),0_0_40px_rgba(59,130,246,0.15)] cursor-pointer group"
                aria-label="Email Me"
              >
                <FaEnvelope className="w-5 h-5 text-secondary group-hover:text-[#3B82F6] transition-colors duration-300" />
              </a>
              <a
                href="tel:9336158912"
                className="relative z-[50] w-12 h-12 rounded-full bg-[#18181B]/60 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4),0_0_40px_rgba(59,130,246,0.15)] cursor-pointer group"
                aria-label="Call Me"
              >
                <FaPhoneAlt className="w-5 h-5 text-secondary group-hover:text-[#3B82F6] transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Video Card (40%) */}
        <div className="w-full flex justify-center items-center mt-10 md:mt-0">
          <div className="relative w-full max-w-[310px] flex justify-center items-center">
            {/* Ambient Pulsing Glow Background */}
            <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-tr from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] opacity-[0.35] blur-[60px] animate-pulse" />

            {/* Glassmorphic floating card for video */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full bg-[#18181B]/60 backdrop-blur-xl border border-[#3B82F6]/35 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 overflow-hidden"
            >
              {/* Card Titlebar/Header */}
              <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-white/40 text-xs ml-2 font-mono">intro_video.mp4</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span className="text-[10px] text-white/50 font-mono">1080p</span>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-inner group">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  preload="metadata"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source src="/Intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center z-10 pointer-events-none">
        <Link to="about" smooth duration={500} offset={-100}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer hover:border-white transition-colors duration-300 pointer-events-auto">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero
