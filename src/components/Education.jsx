import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { education } from '../constants'
import { textVariant, fadeIn, staggerContainer } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

const EducationCard = ({ index, degree, institution, date, grade, gradeLabel, details, highlights, icon, type }) => {
  const isCollege = type === 'college'

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className={`relative bg-[#151030]/50 border border-white/5 p-8 rounded-2xl backdrop-blur-md shadow-card w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start justify-between ${
        isCollege ? 'border-l-4 border-l-[#915eff]' : 'border-l-4 border-l-[#00cea8]'
      } hover:border-white/10 hover:shadow-[0_0_30px_rgba(145,94,255,0.1)] transition-all duration-500`}
    >
      {/* Icon badge */}
      <div className="absolute -top-4 -left-3 w-10 h-10 rounded-full bg-[#151030] border border-white/10 flex items-center justify-center text-xl shadow-lg">
        {icon}
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
              isCollege 
                ? 'bg-[#915eff]/10 text-[#915eff] border border-[#915eff]/20' 
                : 'bg-[#00cea8]/10 text-[#00cea8] border border-[#00cea8]/20'
            }`}>
              {date}
            </span>
            {isCollege && (
              <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#bf61ff]/10 text-[#bf61ff] border border-[#bf61ff]/20">
                B.Tech CSE
              </span>
            )}
          </div>
          <h3 className="text-white text-[22px] font-bold mt-3 tracking-wide leading-tight">{degree}</h3>
          <p className={`${isCollege ? 'text-[#bf61ff]' : 'text-[#00cea8]'} text-[17px] font-semibold mt-1 flex items-center gap-2`}>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {institution}
          </p>
        </div>
        <p className="text-[#aaa6c3] text-[15px] leading-relaxed font-light">{details}</p>

        {/* Subject highlights for 10th class */}
        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
              >
                <span className="text-[#00cea8] text-sm font-bold">{h.score}</span>
                <span className="text-secondary text-xs font-medium">in {h.subject}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grade badge */}
      <div className="flex-shrink-0 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-center md:self-center min-w-[130px] hover:bg-white/[0.07] transition-colors duration-300">
        <span className="text-secondary text-[10px] font-semibold uppercase tracking-wider block">
          {gradeLabel || 'Grade'}
        </span>
        <span className={`${isCollege ? 'text-[#915eff]' : 'text-[#00cea8]'} text-2xl font-black tracking-wide block mt-1`}>
          {grade}
        </span>
      </div>
    </motion.div>
  )
}

const Education = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full space-y-12"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My academic background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      {/* Timeline connector */}
      <div className="relative flex flex-col gap-8">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#915eff] via-[#bf61ff] to-[#00cea8] opacity-30 hidden md:block rounded-full" />

        {education.map((edu, index) => (
          <div key={`edu-${index}`} className="relative md:pl-12">
            {/* Timeline dot */}
            <div className={`absolute left-[13px] top-8 w-[14px] h-[14px] rounded-full border-2 hidden md:block ${
              edu.type === 'college' 
                ? 'border-[#915eff] bg-[#915eff]/20 shadow-[0_0_10px_rgba(145,94,255,0.4)]' 
                : 'border-[#00cea8] bg-[#00cea8]/20 shadow-[0_0_10px_rgba(0,206,168,0.4)]'
            }`} />
            <EducationCard index={index} {...edu} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Education, 'education')
