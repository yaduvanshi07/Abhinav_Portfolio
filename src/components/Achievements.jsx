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
        max: 20,
        scale: 1.03,
        speed: 350,
      }}
      className="w-full sm:w-[280px] md:w-[320px]"
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
        className="w-full bg-gradient-to-br from-white/5 to-white/0 p-[1px] rounded-2xl border border-white/5 shadow-card hover:border-[#3B82F6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 h-full"
      >
        <div className="bg-[#18181B]/60 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center h-full space-y-4">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
            {getAchievementIcon(title)}
          </div>
          <div className="space-y-2">
            <h3 className="text-white text-[18px] font-bold tracking-wide font-heading">{title}</h3>
            <p className="text-secondary text-[13px] leading-relaxed font-light">{description}</p>
          </div>
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
      viewport={{ once: true, amount: 0.2 }}
      className="w-full space-y-12"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Key milestones & credentials</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="flex flex-wrap gap-6 justify-center">
        {achievements.map((item, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Achievements, 'achievements')
