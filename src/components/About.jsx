import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import { styles } from '../styles'
import { services } from '../constants'
import { Tilt } from 'react-tilt'

const getServiceIcon = (title) => {
  switch (title) {
    case "Full Stack Developer":
      return (
        <svg className="w-16 h-16 text-[#00cea8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    case "Backend Engineer":
      return (
        <svg className="w-16 h-16 text-[#bf61ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 3h13.5m-13.5-6h13.5m-13.5-3h13.5m-13.5-3h13.5" />
        </svg>
      )
    case "AI/ML Integrations":
      return (
        <svg className="w-16 h-16 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-11.663-1.876A4.75 4.75 0 001.75 18h10.5M12 18h9.75c1.242 0 2.25-1.008 2.25-2.25 0-1.096-.786-2.008-1.83-2.196a5.25 5.25 0 00-10.233-2.32" />
        </svg>
      )
    case "Software Engineer":
      return (
        <svg className="w-16 h-16 text-[#00cea8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    default:
      return (
        <svg className="w-16 h-16 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
  }
}

const ServiceCard = ({ index, title, link }) => {
  const cardContent = (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
      className={`w-full bg-gradient-to-br from-[#00cea8]/30 to-[#bf61ff]/30 p-[1px] rounded-[20px] shadow-card hover:shadow-[0_0_25px_rgba(145,94,255,0.3)] transition-shadow duration-300 ${link ? 'cursor-pointer' : ''}`}
    >
      <div className="bg-[#151030]/80 backdrop-blur-md rounded-[20px] py-8 px-6 min-h-[280px] flex justify-evenly items-center flex-col border border-white/5">
        <div className="flex items-center justify-center bg-white/5 p-4 rounded-full border border-white/10 shadow-inner">
          {getServiceIcon(title)}
        </div>

        <h3 className="text-white text-[19px] font-bold text-center mt-4 tracking-wide">
          {title}
        </h3>

        {link && (
          <span className="text-[12px] font-semibold text-[#00cea8] mt-4 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity duration-200">
            View Certificate
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 25,
        scale: 1.05,
        speed: 400,
      }}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Tilt>
  );
}

const About = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="space-y-16"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Professional Story.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {/* Story & Goals */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[1.2] space-y-6"
        >
          <p className="text-secondary text-[17px] leading-[30px] font-light">
            I am a results-driven Full Stack Developer and Software Engineer with academic backing from <strong className="text-white font-semibold">IIIT Manipur (CGPA 8.25)</strong> and professional internship credits at <strong className="text-white font-semibold">Zenix Automotive</strong> and <strong className="text-white font-semibold">IIT BHU</strong>. I specialize in the MERN stack, Node.js ecosystem, and integrating intelligent decision-making logic using Machine Learning concepts (like Thompson Sampling and UCB bandit models).
          </p>

          <p className="text-secondary text-[17px] leading-[30px] font-light">
            Having solved <strong className="text-white font-semibold">400+ problems in Data Structures and Algorithms</strong> in C++, I bring strong problem-solving skills to backend engineering, API performance tuning, and database modeling. My work blends high-performance backend pipelines with clean, responsive user experiences.
          </p>

          <div className="bg-[#100d25]/50 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h4 className="text-white font-bold text-[18px] mb-2">My Career Goals</h4>
            <p className="text-[#aaa6c3] text-[15px] leading-[26px]">
              My objective is to build highly scalable web infrastructures and AI-driven products that deliver seamless user interactions. I am eager to join high-impact engineering teams at leading companies or fast-growing startups, where I can apply my optimization skills to reduce system latency and solve complex backend challenges.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-1 grid grid-cols-2 gap-4 h-fit"
        >
          <div className="bg-[#151030]/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
            <span className="text-3xl mb-2">🏆</span>
            <span className="text-white font-bold text-2xl">400+</span>
            <span className="text-secondary text-sm mt-1">DSA Solved</span>
          </div>

          <div className="bg-[#151030]/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
            <span className="text-3xl mb-2">🥇</span>
            <span className="text-white font-bold text-lg">Best Intern</span>
            <span className="text-secondary text-sm mt-1">Award Recipient</span>
          </div>

          <div className="bg-[#151030]/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
            <span className="text-3xl mb-2">🎓</span>
            <span className="text-white font-bold text-2xl">8.25</span>
            <span className="text-secondary text-sm mt-1">CGPA (CSE)</span>
          </div>

          <div className="bg-[#151030]/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
            <span className="text-3xl mb-2">⚡</span>
            <span className="text-white font-bold text-2xl">-35%</span>
            <span className="text-secondary text-sm mt-1">Latency Reduction</span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center pt-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  )
}

export default About
