import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { education } from '../constants'
import { textVariant, fadeIn, staggerContainer } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { FaGraduationCap, FaBookOpen, FaMapMarkerAlt } from 'react-icons/fa'

const getEducationIcon = (type) => {
  if (type === 'college') {
    return <FaGraduationCap className="w-5 h-5 text-white" />
  }
  return <FaBookOpen className="w-5 h-5 text-white" />
}

const EducationCard = ({ index, accentColor, degree, institution, date, grade, gradeLabel, details, highlights, type }) => {
  const isCollege = type === 'college'

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      className="relative bg-[#18181B]/60 border border-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-card w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start justify-between border-l-4 hover:border-white/10 hover:shadow-card-blue transition-all duration-300 group"
      style={{
        borderLeftColor: accentColor,
      }}
    >
      {/* Icon badge */}
      <div className="absolute -top-4 left-4 md:-left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#18181B] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        {getEducationIcon(type)}
      </div>

      <div className="space-y-4 flex-1 pt-2 md:pt-0">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span 
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border font-heading"
              style={{
                backgroundColor: `${accentColor}15`,
                color: accentColor,
                borderColor: `${accentColor}30`
              }}
            >
              {date}
            </span>
            {isCollege && (
              <span 
                className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border font-heading"
                style={{
                  backgroundColor: `${accentColor}15`,
                  color: accentColor,
                  borderColor: `${accentColor}30`
                }}
              >
                B.Tech CSE
              </span>
            )}
          </div>
          <h3 className="text-white text-[20px] sm:text-[22px] font-bold mt-3 tracking-wide leading-snug font-heading group-hover:text-[#60A5FA] transition-colors">
            {degree}
          </h3>
          <p 
            className="text-[15px] sm:text-[16px] font-semibold mt-1 flex items-center gap-2"
            style={{ color: accentColor }}
          >
            <FaMapMarkerAlt className="w-3.5 h-3.5 flex-shrink-0" />
            {institution}
          </p>
        </div>
        <p className="text-secondary text-[14px] sm:text-[15px] leading-relaxed font-light">{details}</p>

        {/* Subject highlights for 10th class */}
        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap gap-2.5 pt-1">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs"
              >
                <span className="font-bold" style={{ color: accentColor }}>{h.score}</span>
                <span className="text-secondary font-medium">in {h.subject}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grade badge */}
      <div className="flex-shrink-0 bg-white/5 border border-white/10 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl text-center self-start md:self-center min-w-[120px] sm:min-w-[130px] hover:bg-white/[0.08] transition-colors duration-300">
        <span className="text-secondary text-[10px] font-semibold uppercase tracking-wider block font-heading">
          {gradeLabel || 'Grade'}
        </span>
        <span 
          className="text-xl sm:text-2xl font-black tracking-wide block mt-1 font-heading"
          style={{ color: accentColor }}
        >
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
        <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#ff9933] to-[#3B82F6] opacity-30 hidden md:block rounded-full" />

        {education.map((edu, index) => {
          const accentColor = index === 0 ? '#ff9933' : '#3B82F6'
          return (
            <div key={`edu-${index}`} className="relative md:pl-12">
              {/* Timeline dot */}
              <div 
                className="absolute left-[13px] top-8 w-[14px] h-[14px] rounded-full border-2 hidden md:block" 
                style={{
                  borderColor: accentColor,
                  backgroundColor: `${accentColor}20`,
                  boxShadow: `0 0 10px ${accentColor}40`
                }}
              />
              <EducationCard index={index} accentColor={accentColor} {...edu} />
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Education, 'education')
