import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { styles } from '../styles'
import { skillCategories } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'

const Tech = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full space-y-12">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical capability</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      {/* Tabs list */}
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {skillCategories.map((category, idx) => (
          <button
            key={category.title}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 backdrop-blur-md border ${
              activeTab === idx
                ? 'bg-gradient-to-r from-[#915eff] to-[#bf61ff] text-white border-transparent shadow-[0_0_15px_rgba(145,94,255,0.4)] scale-105'
                : 'bg-white/5 text-secondary border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills list details */}
      <div className="min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillCategories[activeTab].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
                initial="hidden"
                animate="show"
                className="bg-[#151030]/50 border border-white/5 p-5 rounded-2xl flex flex-col justify-between backdrop-blur-sm shadow-card hover:border-[#915eff]/30 transition-colors duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-tertiary flex items-center justify-center p-2 border border-white/5">
                      {skill.icon.startsWith('http') ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            const parent = e.target.parentElement
                            if (parent) parent.innerHTML = '⚙️'
                          }}
                        />
                      ) : (
                        <span className="text-xl">{skill.icon}</span>
                      )}
                    </div>
                    <h4 className="text-white font-bold text-[18px] tracking-wide">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-[#bf61ff] font-bold text-sm tracking-wider bg-[#bf61ff]/10 px-2.5 py-1 rounded-full border border-[#bf61ff]/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full bg-black/40 h-2.5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#915eff] to-[#bf61ff] rounded-full"
                  />
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
