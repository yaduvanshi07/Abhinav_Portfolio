import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { styles } from '../styles'
import { skillCategories } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'
import { FaLaptopCode, FaBrain, FaChartLine, FaCommentAlt, FaCloud, FaCube, FaDatabase, FaCogs, FaNetworkWired, FaBullseye } from 'react-icons/fa'

const SkillIcon = ({ icon, name }) => {
  const [imgError, setImgError] = useState(false)

  if (icon.startsWith('http') && !imgError) {
    return (
      <img
        src={icon}
        alt={name}
        className="w-full h-full object-contain"
        loading="lazy"
        onError={() => setImgError(true)}
      />
    )
  }

  switch (name) {
    case "Recommendation Systems":
      return <FaBullseye className="w-5 h-5 text-[#3B82F6]" />
    case "Thompson Sampling":
      return <FaBrain className="w-5 h-5 text-[#60A5FA]" />
    case "UCB Bandit Algorithms":
      return <FaChartLine className="w-5 h-5 text-[#3B82F6]" />
    case "NLP":
      return <FaCommentAlt className="w-5 h-5 text-[#22C55E]" />
    case "Cloudinary":
      return <FaCloud className="w-5 h-5 text-[#60A5FA]" />
    case "Data Structures & Algorithms":
      return <FaLaptopCode className="w-5 h-5 text-[#3B82F6]" />
    case "Object Oriented Programming":
      return <FaCube className="w-5 h-5 text-[#60A5FA]" />
    case "DBMS":
      return <FaDatabase className="w-5 h-5 text-[#3B82F6]" />
    case "Operating Systems":
      return <FaCogs className="w-5 h-5 text-[#60A5FA]" />
    case "Computer Networks":
      return <FaNetworkWired className="w-5 h-5 text-[#22C55E]" />
    default:
      return <span className="text-lg">{icon.startsWith('http') ? '⚙️' : icon}</span>
  }
}

const Tech = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full space-y-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical capability</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      {/* Tabs list */}
      <div
        role="tablist"
        aria-label="Skill categories"
        className="flex flex-wrap gap-2.5 justify-center md:justify-start"
      >
        {skillCategories.map((category, idx) => (
          <button
            key={category.title}
            role="tab"
            aria-selected={activeTab === idx}
            aria-controls={`skills-tabpanel-${idx}`}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-300 backdrop-blur-md border cursor-pointer font-heading ${
              activeTab === idx
                ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.35)] scale-105'
                : 'bg-white/5 text-secondary border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills list details */}
      <div className="min-h-[220px]" id={`skills-tabpanel-${activeTab}`} role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          >
            {skillCategories[activeTab].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn('up', 'spring', index * 0.06, 0.4)}
                initial="hidden"
                animate="show"
                className="bg-[#18181B]/60 border border-white/5 p-4 sm:p-5 rounded-2xl flex items-center gap-4 backdrop-blur-md shadow-card hover:border-[#3B82F6]/40 hover:bg-[#18181B]/90 hover:shadow-card-blue transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center p-2.5 border border-white/10 group-hover:border-[#3B82F6]/40 group-hover:scale-110 group-hover:bg-[#3B82F6]/10 transition-all duration-300 flex-shrink-0 shadow-inner">
                  <SkillIcon icon={skill.icon} name={skill.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-[15px] sm:text-[16px] tracking-wide font-heading group-hover:text-[#60A5FA] transition-colors leading-snug">
                    {skill.name}
                  </h4>
                  <span className="text-secondary text-[12px] font-light mt-0.5 block truncate">
                    {skillCategories[activeTab].title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tech
