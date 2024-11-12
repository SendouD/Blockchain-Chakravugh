'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fonts = ['Orbitron', 'Rajdhani', 'Arial', 'Verdana', 'Courier', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black']

export default function WelcomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [letterFonts, setLetterFonts] = useState(Array(22).fill('Orbitron'))

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterFonts(prev => prev.map(() => fonts[Math.floor(Math.random() * fonts.length)]))
    }, 100) // Change fonts every 100ms

    return () => clearInterval(interval)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h2 
            className="text-6xl font-extrabold mb-6 text-purple-300"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {'Hack the BLOCK '.split('').map((letter, index) => (
              <span key={index} style={{ fontFamily: letterFonts[index], display: 'inline-block' }} className="transition-all duration-100">
                {letter}
              </span>
            ))}
          </motion.h2>
          <motion.p 
            className="text-2xl mb-8 max-w-2xl text-gray-400"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Unravel the Smart Contract Vulnerabilities
          </motion.p>
          <motion.div 
            className="animate-bounce text-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <ChevronDown size={48} />
          </motion.div>
        </section>

        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <motion.h3 
            className="text-4xl font-bold mb-8 text-purple-300 font-[Orbitron]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            Description
          </motion.h3>
          <motion.div 
            className="bg-gray-900 bg-opacity-80 p-6 rounded-lg max-w-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-lg mb-4 text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our team has created a lottery winner smart contract in Arbitrium sepolia. The winner will be chosen by a random number generated, which is the ticket to win this round. Each team is given different Contract addresses.
            </motion.p>
            <motion.p 
              className="text-lg mb-4 text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <strong>Mission:</strong> People write smart contracts with vulnerabilities which cause disasters. Your task is to find the random number generated in the ticket and win the lottery!
            </motion.p>
            <motion.p 
              className="text-lg font-semibold text-yellow-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The first two teams to win will get a T-shirt. It's on us!!!
            </motion.p>
          </motion.div>
        </section>
        
              <section className="flex flex-col justify-center items-center">
              <motion.h3 
            className="text-4xl font-bold mb-8 text-purple-300 font-[Orbitron]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            Tools that might help you
          </motion.h3>
              <motion.a 
            href="https://sepolia.arbiscan.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-purple-900 rounded-full hover:bg-purple-800 transition-colors"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >Arbitrium sepolia  </motion.a>
          <br />
             <motion.a 
            href="https://remix.ethereum.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-purple-900 rounded-full hover:bg-purple-800 transition-colors"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >Remix IDE  </motion.a>
              </section>
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <motion.h3 
            className="text-4xl font-bold mb-8 text-purple-300 font-[Orbitron]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            Need Help?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gray-900 bg-opacity-80 p-6 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-semibold mb-4 text-purple-300 font-[Orbitron]">IOTA Blockchain Lead</h4>
              <p className="text-lg text-gray-300">Jananathan</p>
              <a href="https://x.com/sendou_d" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@sendou_d</a>
            </motion.div>
            <motion.div 
              className="bg-gray-900 bg-opacity-80 p-6 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-semibold mb-4 text-purple-300 font-[Orbitron]">IOTA Blockchain Core</h4>
              <p className="text-lg text-gray-300">JL Vinay</p>
              <a href="https://x.com/ashitaka_3024" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@ashitaka_3024</a>
            </motion.div>
            <motion.div 
              className="bg-gray-900 bg-opacity-80 p-6 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-semibold mb-4 text-purple-300 font-[Orbitron]">IOTA Blockchain Core</h4>
              <p className="text-lg text-gray-300">Abhiraj Chauhan              </p>
              <a href="https://x.com/abhiraj_2404" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@abhiraj_2404</a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 bg-opacity-80 py-4 text-center text-gray-400">
        <p>&copy; 2023 IOTAXGDG CHAKRAVYUH. All rights reserved.</p>
      </footer>

      {/* Floating blockchain elements with chain connections */}
      {[...Array(10)].map((_, i) => (
        <div key={i}>
          <motion.div
            className="absolute w-8 h-8 bg-purple-900 bg-opacity-30 rounded-lg"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 90}%`,
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
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
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