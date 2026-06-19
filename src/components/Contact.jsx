import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer, fadeIn, slideIn } from '../utils/motion'
import { textVariant } from '../utils/motion'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setError(null)
    setSuccess(false)

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

    if (!accessKey || accessKey === "your_web3forms_access_key_here") {
      setLoading(false)
      setError("API key is not configured. Please add your Web3Forms key to .env file.")
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Message from ${form.name}`,
          from_name: "Portfolio Contact Form",
        })
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        throw new Error(data.message || "Something went wrong.")
      }
    } catch (err) {
      console.error("Web3Forms Error:", err)
      setError(err.message || "Failed to send message. Please try again.")
      setTimeout(() => setError(null), 6000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="space-y-12"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className="mt-12 flex md:flex-row flex-col gap-10 overflow-hidden">
        {/* Form panel */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 0.8)}
          className="md:w-[60%] md:flex-none bg-[#100d25]/60 border border-white/5 p-8 rounded-2xl backdrop-blur-md relative"
        >
          <p className="text-secondary text-sm uppercase tracking-wider">Reach out directly</p>
          <h3 className="text-white font-black text-[30px] sm:text-[40px] md:text-[50px] tracking-wide mt-1">
            Send Message.
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white text-sm font-semibold mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#151030]/80 border border-white/10 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-[#915eff]/50 transition-colors font-light"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white text-sm font-semibold mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-[#151030]/80 border border-white/10 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-[#915eff]/50 transition-colors font-light"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white text-sm font-semibold mb-2">Your Message</span>
              <textarea
                rows={6}
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message details..."
                className="bg-[#151030]/80 border border-white/10 py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-[#915eff]/50 transition-colors font-light resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#915eff] to-[#bf61ff] hover:from-[#7c4ce6] hover:to-[#a84ee6] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-primary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Toast notifications */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 right-8 bg-[#00cea8] text-primary px-4 py-2.5 rounded-xl font-bold text-sm shadow-md z-[60]"
            >
              ✓ Thank you! I will respond shortly.
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 right-8 bg-[#ff4a4a] text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md z-[60]"
            >
              ✗ {error}
            </motion.div>
          )}
        </motion.div>

        {/* Credentials and social links cards */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 0.8)}
          className="md:w-[40%] md:flex-none flex flex-col justify-center gap-6"
        >
          <div className="bg-[#151030]/40 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-[#915eff]/30 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-[#00cea8]">
              ✉️
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-wider">Email Address</p>
              <a href="mailto:abhinavyaduvanshi05@gmail.com" className="text-white hover:text-[#915eff] font-medium transition-colors text-[15px] mt-0.5 block">
                abhinavyaduvanshi05@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-[#151030]/40 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-[#915eff]/30 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-[#bf61ff]">
              📞
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-wider">Phone Number</p>
              <a href="tel:9336158912" className="text-white hover:text-[#915eff] font-medium transition-colors text-[15px] mt-0.5 block">
                +91 9336158912
              </a>
            </div>
          </div>

          <div className="bg-[#151030]/40 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-[#915eff]/30 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-[#915eff]">
              🔗
            </div>
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-wider">Professional Networks</p>
              <div className="flex gap-4 mt-1">
                <a
                  href="https://www.linkedin.com/in/abhinav-kumar-yadav-706a14257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#915eff] font-medium transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
                <span className="text-white/20">|</span>
                <a
                  href="https://github.com/yaduvanshi07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#915eff] font-medium transition-colors text-sm"
                >
                  GitHub Repos
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
