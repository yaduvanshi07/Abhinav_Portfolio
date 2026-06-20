import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

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
    <span className="text-[#915EFF] border-r-[3px] border-[#915EFF] pr-1 animate-blink font-semibold">
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
            <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="flex-1 space-y-4 sm:space-y-6 mt-4 sm:mt-8">
            <div>
              <p className="text-secondary text-sm sm:text-base uppercase tracking-[0.25em] font-medium mb-2">
                Bengaluru, India
              </p>
              <h1 className="font-black text-white text-[38px] sm:text-[50px] md:text-[60px] lg:text-[72px] leading-tight">
                Hi, I'm <span className="text-[#915EFF]">Abhinav</span>
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
                href="https://drive.google.com/file/d/1l-0d64IU9MXXonUHYGVHhXbzFkHDKbmH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#915eff] to-[#bf61ff] hover:from-[#7c4ce6] hover:to-[#a84ee6] text-white px-6 py-3 rounded-full font-semibold shadow-[0_4px_15px_rgba(145,94,255,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer z-20"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Resume
              </a>
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-100}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md hover:scale-105 flex items-center gap-2 cursor-pointer z-20"
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
                className="relative z-[50] w-12 h-12 rounded-full bg-[#151030]/60 border border-white/10 hover:border-[#915eff] hover:bg-[#915eff]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(145,94,255,0.6),0_0_40px_rgba(145,94,255,0.2)] cursor-pointer group"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6 fill-current text-secondary group-hover:text-[#915eff] transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-[50] w-12 h-12 rounded-full bg-[#151030]/60 border border-white/10 hover:border-[#915eff] hover:bg-[#915eff]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(145,94,255,0.6),0_0_40px_rgba(145,94,255,0.2)] cursor-pointer group"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6 fill-current text-secondary group-hover:text-[#915eff] transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:abhinavyaduvanshi05@gmail.com"
                className="relative z-[50] w-12 h-12 rounded-full bg-[#151030]/60 border border-white/10 hover:border-[#915eff] hover:bg-[#915eff]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(145,94,255,0.6),0_0_40px_rgba(145,94,255,0.2)] cursor-pointer group"
                aria-label="Email Me"
              >
                <svg className="w-6 h-6 fill-current text-secondary group-hover:text-[#915eff] transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="tel:9336158912"
                className="relative z-[50] w-12 h-12 rounded-full bg-[#151030]/60 border border-white/10 hover:border-[#915eff] hover:bg-[#915eff]/15 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(145,94,255,0.6),0_0_40px_rgba(145,94,255,0.2)] cursor-pointer group"
                aria-label="Call Me"
              >
                <svg className="w-6 h-6 fill-current text-secondary group-hover:text-[#915eff] transition-colors duration-300" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Video Card (40%) */}
        <div className="w-full flex justify-center items-center mt-10 md:mt-0">
          <div className="relative w-full max-w-[460px] flex justify-center items-center">
            {/* Ambient Pulsing Glow Background */}
            <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-tr from-[#915eff] via-[#bf61ff] to-[#00cea8] opacity-[0.2] blur-[60px] animate-pulse" />

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
              className="relative w-full bg-[#151030]/60 backdrop-blur-xl border border-[#915eff]/40 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#915eff] hover:shadow-[0_0_25px_rgba(145,94,255,0.3)] transition-all duration-300 overflow-hidden"
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#915eff] animate-pulse" />
                  <span className="text-[10px] text-white/50 font-mono">1080p</span>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-inner group">
                {/* 
                  ADD YOUR VIDEO HERE:
                  - Option A: Local video file (Recommended)
                    1. Place your video file (e.g. intro.mp4) in the `public` directory of your project.
                    2. Update the `src` attribute below to: src="/intro.mp4" (or whichever subfolder it is in).
                  
                  - Option B: YouTube / Vimeo / Externally Hosted Video
                    Replace the <video> tag below with an iframe:
                    <iframe 
                      className="w-full h-full object-cover"
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                      title="Intro Video"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                */}
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src="/intro.mp4" type="video/mp4" />
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
