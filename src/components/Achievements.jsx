import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { achievements } from '../constants'
import { textVariant, fadeIn, staggerContainer } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
import { FaTrophy, FaAward, FaCertificate, FaGraduationCap } from 'react-icons/fa'

const getAchievementIcon = (title) => {
  if (title.includes("DSA Problems")) {
    return <FaTrophy className="w-8 h-8 text-accent-cyan" />
  }
  if (title.includes("Best Intern")) {
    return <FaAward className="w-8 h-8 text-accent-amber" />
  }
  if (title.includes("Full Stack")) {
    return <FaCertificate className="w-8 h-8 text-accent-purple" />
  }
  return <FaGraduationCap className="w-8 h-8 text-accent-rose" />
}

const AchievementCard = ({ index, title, description }) => {
  return (
    <Tilt
      options={{
        max: 15,
        scale: 1.03,
        speed: 350,
      }}
      className="w-full h-full"
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.12, 0.6)}
        className="w-full bg-[#18181B]/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-card hover:border-[#3B82F6]/40 hover:shadow-card-blue transition-all duration-300 h-full flex flex-col items-center text-center space-y-4 group"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-[#3B82F6]/40 group-hover:bg-[#3B82F6]/10 transition-all duration-300">
          {getAchievementIcon(title)}
        </div>
        <div className="space-y-2 flex-1 flex flex-col justify-center">
          <h3 className="text-white text-[17px] sm:text-[18px] font-bold tracking-wide font-heading group-hover:text-[#60A5FA] transition-colors">
            {title}
          </h3>
          <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed font-light">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Achievements = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full space-y-12"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Key milestones & credentials</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {achievements.map((item, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Achievements, 'achievements')
