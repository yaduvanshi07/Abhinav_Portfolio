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
      }}
      contentArrowStyle={{ borderRight: '7px solid  #27272A' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-[#18181B] rounded-full border border-white/10">
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
                const parent = e.target.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="text-white text-xs font-bold">${experience.company_name.substring(0, 3)}</span>`
                }
              }}
            />
          ) : (
            <span className="text-white text-xs font-bold">
              {experience.company_name.substring(0, 3)}
            </span>
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold font-heading">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-[14px] pl-1 tracking-wider font-light"
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.link && (
        <div className="mt-5 flex justify-start">
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#3B82F6] bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 border border-[#3B82F6]/30 hover:border-[#3B82F6]/60 rounded-xl transition-all duration-300 shadow-md group font-heading"
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
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
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

