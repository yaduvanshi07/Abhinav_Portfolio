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
  category,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="h-full flex"
    >
      <Tilt
        options={{
          max: 12,
          scale: 1.02,
          speed: 300,
        }}
        className="bg-[#18181B]/60 backdrop-blur-md p-6 rounded-2xl w-full border border-white/5 flex flex-col justify-between h-full hover:border-[#3B82F6]/40 transition-all duration-300 shadow-card hover:shadow-card-blue group"
      >
        <div className="flex flex-col flex-1">
          {image && (
            <div className="relative w-full h-[210px] mb-5 overflow-hidden rounded-xl border border-white/10 group">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {category && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#09090B]/80 backdrop-blur-md text-[#60A5FA] border border-white/15 shadow-md">
                  {category}
                </div>
              )}
            </div>
          )}

          <div className="space-y-3 flex-1">
            <h3 className="text-white font-bold text-[22px] sm:text-[24px] tracking-wide font-heading group-hover:text-[#60A5FA] transition-colors duration-300">
              {name}
            </h3>
            <p className="text-secondary text-[14px] leading-relaxed font-light">
              {description}
            </p>

            {/* Key Impact & Deliverables Bullet List */}
            {achievements && achievements.length > 0 && (
              <div className="mt-4 pt-3 border-t border-white/5 space-y-2.5">
                <p className="text-white text-xs font-semibold uppercase tracking-wider font-heading flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  Key Impact & Deliverables:
                </p>
                <ul className="space-y-2 pl-0.5">
                  {achievements.map((ach, idx) => (
                    <li key={idx} className="text-secondary text-[13px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60 mt-1.5 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="pt-5 border-t border-white/5 mt-5">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
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
          <div className="flex items-center justify-between gap-3">
            {source_code_link ? (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} source code on GitHub`}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 hover:border-[#3B82F6]/40 text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                <FaGithub className="w-4 h-4 text-white" />
                <span>Codebase</span>
              </a>
            ) : (
              <span className="text-xs text-secondary font-light">Internal</span>
            )}

            {live_link ? (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${name}`}
                className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#60A5FA] px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 shadow-[0_2px_10px_rgba(59,130,246,0.25)] hover:scale-105"
              >
                <FaExternalLinkAlt className="w-3 h-3 text-white" />
                <span>Live Demo</span>
              </a>
            ) : (
              <div
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-secondary"
                title="Supervised/Unsupervised machine learning experimentation pipeline"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span>ML Pipeline</span>
              </div>
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
      <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work & contributions</p>
          <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
        </motion.div>

        {/* Filter buttons in heading row right side */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex gap-1.5 sm:gap-2 bg-[#18181B]/60 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-lg flex-shrink-0 self-start sm:self-end"
        >
          {['All', 'Full Stack', 'AI / ML'].map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer font-heading ${
                filter === cat
                  ? 'bg-[#3B82F6] text-white shadow-[0_0_12px_rgba(59,130,246,0.35)]'
                  : 'text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] font-light"
      >
        Each project represents an end-to-end production loop or experiment. Click on links to view Git repos or explore active server-deployed applications. Key backend optimizations and algorithmic results are highlighted for review.
      </motion.p>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${project.name}`} index={index} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Projects
