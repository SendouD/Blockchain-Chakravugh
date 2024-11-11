'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Loader2 } from 'lucide-react'
import axios from 'axios'
const fonts = ['Orbitron', 'Rajdhani', 'Arial', 'Verdana', 'Courier', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black']

export default function Verify() {
  const [scrollY, setScrollY] = useState(0)
  const [letterFonts, setLetterFonts] = useState(Array(22).fill('Orbitron'))
  const [teamId, setTeamId] = useState('')
  const [isEqual, setIsEqual] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [answer, setAnswer] = useState('');
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterFonts(prev => prev.map(() => fonts[Math.floor(Math.random() * fonts.length)]))
    }, 100) // Change fonts every 100ms
//     setTransactionHash("0xa0Ee7A142d267C1f36714E4a8F75612F20a79720")
// setIsLoading(false);

    return () => clearInterval(interval)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);

    try {
      const response = await axios.post(`/team-submission/${teamId}`,{answer});
      console.log(response.data.isEqual);
      setIsEqual(response.data.isEqual);
    } catch (error) {
      console.error('Error fetching transaction hash:', error)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-[Rajdhani]">
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-80">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-2xl font-bold font-[Orbitron]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
             CHAKRAVYUH
          </motion.h1>
          <motion.a 
                        href="/" 

            rel="noopener noreferrer" 
            className="px-4 py-2 bg-purple-900 rounded-full hover:bg-purple-800 transition-colors"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
Home         </motion.a>
          <motion.a 
                        href="/gethash" 

            rel="noopener noreferrer" 
            className="px-4 py-2 bg-purple-900 rounded-full hover:bg-purple-800 transition-colors"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get Contract address
            </motion.a>
          <motion.a 
            href="/verify" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-purple-900 rounded-full hover:bg-purple-800 transition-colors"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Submit your Answer
          </motion.a>
        </nav>
      </header>

      <main className="pt-20">
        {/* ... (previous sections remain unchanged) ... */}

        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <motion.h3 
            className="text-4xl font-bold mb-8 text-purple-300 font-[Orbitron]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
Submit Your Answer          </motion.h3>
          <motion.form 
            onSubmit={handleSubmit}
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center border-b border-purple-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter your team ID"
                aria-label="Team ID"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
              />
            </div>
            <div className="flex items-center border-b border-purple-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter your Answer"
                aria-label="Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

<button
                className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'Submit'}
              </button>
              </div>
            
          </motion.form>
          { isEqual!=null && (
            <motion.div
              className="mt-8 p-4 bg-purple-900 bg-opacity-50 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-purple-300">{(isEqual) ? "Hoorayyy!" : "Noob!"}:</h4>
              <p className={"text-white break-all " + ((isEqual) ? "text-green-600" : "text-red-600")} >{(isEqual) ? "Random number is correct!" : "Random number is Incorrect!" }</p>
            </motion.div>
          )}
        </section>
      </main>

      <footer className="bg-gray-900 bg-opacity-80 py-4 text-center text-gray-400">
        <p>&copy; 2023 IOTAXGDG CHAKRAVYUH. All rights reserved.</p>
      </footer>

      {/* Floating blockchain elements with chain connections */}
      {[...Array(15)].map((_, i) => (
        <div key={i}>
          <motion.div
            className="absolute w-8 h-8 bg-purple-900 bg-opacity-30 rounded-lg"
            style={{
              top: `${Math.random() * 98}%`,
              left: `${Math.random() * 98}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute w-1 bg-purple-500 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}px`,
              transformOrigin: 'top',
            }}
            animate={{
              scaleY: [1, 0.8, 1],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      ))}
    </div>
  )
}