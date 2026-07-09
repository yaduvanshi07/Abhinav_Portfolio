import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({
  index,
  name,
  description,
  achievements,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 300,
        }}
        className="bg-[#18181B]/60 backdrop-blur-md p-6 rounded-2xl w-full border border-white/5 flex flex-col justify-between h-full hover:border-[#3B82F6]/30 transition-all duration-300 shadow-card"
      >
        <div>
          {image && (
            <div className="relative w-full h-[210px] mb-5 overflow-hidden rounded-xl border border-white/10 group">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-white font-bold text-[24px] tracking-wide font-heading">{name}</h3>
            <p className="text-secondary text-[14px] leading-relaxed font-light">{description}</p>

            {/* Achievements Bullet List */}
            {achievements && achievements.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-white text-xs font-semibold uppercase tracking-wider font-heading">Key Impact & Deliverables:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {achievements.map((ach, idx) => (
                    <li key={idx} className="text-secondary text-[13px] leading-relaxed font-light">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* Tech Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[12px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-between">
            {source_code_link && (
              <button
                onClick={() => window.open(source_code_link, '_blank')}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                <FaGithub className="w-4 h-4 text-white" />
                Codebase
              </button>
            )}
            {live_link ? (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#60A5FA] px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 shadow-[0_2px_10px_rgba(59,130,246,0.25)] hover:scale-105"
              >
                <FaExternalLinkAlt className="w-3 h-3 text-white" />
                Live Demo
              </a>
            ) : (
              <button
                disabled
                className="bg-white/5 text-white/30 border border-white/5 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
              >
                Internal Deploy
              </button>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  )

  return (
    <div className="w-full space-y-12">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work & contributions</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] font-light"
        >
          Each project represents an end-to-end production loop or experiment. Click on links to view Git repos or explore active server-deployed applications. Key backend optimizations and algorithmic results are highlighted for review.
        </motion.p>

        {/* Filter buttons */}
        <div className="flex gap-2.5 bg-[#18181B]/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md flex-shrink-0">
          {['All', 'Full Stack', 'AI / ML'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${filter === cat
                  ? 'bg-[#3B82F6] text-white shadow-[0_0_10px_rgba(59,130,246,0.25)]'
                  : 'text-secondary hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Projects
