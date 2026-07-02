import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import { styles } from '../styles'
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import { FaLaptopCode, FaServer, FaBrain, FaTerminal, FaTrophy, FaAward, FaGraduationCap, FaBolt } from 'react-icons/fa'

const getServiceIcon = (title) => {
  switch (title) {
    case "Full Stack Developer":
      return <FaLaptopCode className="w-12 h-12 text-white" />
    case "Backend Engineer":
      return <FaServer className="w-12 h-12 text-white" />
    case "AI/ML Integrations":
      return <FaBrain className="w-12 h-12 text-white" />
    case "Software Engineer":
      return <FaTerminal className="w-12 h-12 text-white" />
    default:
      return <FaLaptopCode className="w-12 h-12 text-white" />
  }
}

const ServiceCard = ({ index, title, link }) => {
  const cardContent = (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
      className={`w-full bg-gradient-to-br from-[#3B82F6]/30 to-[#60A5FA]/5 p-[1px] rounded-[20px] shadow-card hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-shadow duration-300 ${link ? 'cursor-pointer' : ''}`}
    >
      <div className="bg-[#18181B]/80 backdrop-blur-md rounded-[20px] py-8 px-6 min-h-[280px] flex justify-evenly items-center flex-col border border-white/5">
        <div className="flex items-center justify-center bg-white/5 p-4 rounded-full border border-white/10 shadow-inner">
          {getServiceIcon(title)}
        </div>

        <h3 className="text-white text-[19px] font-bold text-center mt-4 tracking-wide font-heading">
          {title}
        </h3>

        {link && (
          <span className="text-[12px] font-semibold text-[#3B82F6] mt-4 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity duration-200">
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

          <div className="bg-[#18181B]/50 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h4 className="text-white font-bold text-[18px] mb-2 font-heading">My Career Goals</h4>
            <p className="text-secondary text-[15px] leading-26px]">
              My objective is to build highly scalable web infrastructures and AI-driven products that deliver seamless user interactions. I am eager to join high-impact engineering teams at leading companies or fast-growing startups, where I can apply my optimization skills to reduce system latency and solve complex backend challenges.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-1 grid grid-cols-2 gap-4 h-fit font-heading"
        >
          <div className="bg-[#18181B]/40 border border-white/5 hover:border-[#3B82F6]/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-300 group hover:bg-[#18181B]/60">
            <FaTrophy className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-bold text-2xl">400+</span>
            <span className="text-secondary text-sm mt-1">DSA Solved</span>
          </div>

          <div className="bg-[#18181B]/40 border border-white/5 hover:border-[#3B82F6]/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-300 group hover:bg-[#18181B]/60">
            <FaAward className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-bold text-lg">Best Intern</span>
            <span className="text-secondary text-sm mt-1">Award Recipient</span>
          </div>

          <div className="bg-[#18181B]/40 border border-white/5 hover:border-[#3B82F6]/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-300 group hover:bg-[#18181B]/60">
            <FaGraduationCap className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white font-bold text-2xl">8.25</span>
            <span className="text-secondary text-sm mt-1">CGPA (CSE)</span>
          </div>

          <div className="bg-[#18181B]/40 border border-white/5 hover:border-[#3B82F6]/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-300 group hover:bg-[#18181B]/60">
            <FaBolt className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
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
