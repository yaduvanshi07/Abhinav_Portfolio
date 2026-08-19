import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#18181B',
        color: '#fff',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.6)',
      }}
      contentArrowStyle={{ borderRight: '7px solid #18181B' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-[#18181B] rounded-full border border-white/10 shadow-lg">
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[55%] h-[55%] object-contain"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
                const parent = e.target.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="text-white text-xs font-bold font-heading">${experience.company_name.substring(0, 3)}</span>`
                }
              }}
            />
          ) : (
            <span className="text-white text-xs font-bold font-heading">
              {experience.company_name.substring(0, 3)}
            </span>
          )}
        </div>
      }
    >
      <div className="border-b border-white/5 pb-3">
        <h3 className="text-white text-[22px] sm:text-[24px] font-bold font-heading tracking-wide">
          {experience.title}
        </h3>
        <p
          className="text-[#60A5FA] text-[15px] sm:text-[16px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-4 space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-[13px] sm:text-[14px] leading-relaxed font-light flex items-start gap-2.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {experience.link && (
        <div className="mt-5 pt-3 border-t border-white/5 flex justify-start">
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify internship certificate for ${experience.company_name}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#60A5FA] bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 border border-[#3B82F6]/30 hover:border-[#3B82F6]/60 rounded-xl transition-all duration-300 shadow-md group font-heading hover:scale-105"
          >
            <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" />
            Verify Internship
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience

