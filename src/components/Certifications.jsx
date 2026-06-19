import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { certifications } from '../constants'
import { textVariant, fadeIn, staggerContainer } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { Tilt } from 'react-tilt'

const CertificationCard = ({ index, title, issuer, date, description, skills, icon, color, pdf }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Tilt
      options={{
        max: 15,
        scale: 1.02,
        speed: 400,
      }}
      className="w-full"
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
        className="relative w-full group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
          style={{ background: `linear-gradient(135deg, ${color}40, transparent, ${color}20)` }}
        />

        <div className="relative bg-[#151030]/70 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group-hover:border-white/10 transition-all duration-500">
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{ background: `linear-gradient(90deg, ${color}, ${color}60, transparent)` }}
          />

          <div className="p-7 space-y-5">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${color}10`,
                  borderColor: `${color}30`,
                  boxShadow: isHovered ? `0 0 20px ${color}20` : 'none'
                }}
              >
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-[17px] font-bold tracking-wide leading-tight">{title}</h3>
                <p className="text-secondary text-[13px] font-medium mt-1">{issuer}</p>
                <span
                  className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full mt-2"
                  style={{
                    backgroundColor: `${color}15`,
                    color: color,
                    border: `1px solid ${color}25`
                  }}
                >
                  {date}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#aaa6c3] text-[13px] leading-[22px] font-light">
              {description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 text-secondary border border-white/5 hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* View Certificate Button */}
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 border"
              style={{
                backgroundColor: `${color}10`,
                borderColor: `${color}20`,
                color: color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${color}25`
                e.currentTarget.style.borderColor = `${color}40`
                e.currentTarget.style.boxShadow = `0 0 20px ${color}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${color}10`
                e.currentTarget.style.borderColor = `${color}20`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              View Certificate
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Certifications = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full space-y-12"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Validated expertise & credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary text-[16px] leading-[28px] max-w-3xl font-light"
      >
        These certifications reflect my commitment to continuous learning and professional
        development across diverse domains — from full-stack engineering and algorithmic
        problem-solving to emerging technologies like IIoT and human-centered design.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Certifications, 'certifications')
