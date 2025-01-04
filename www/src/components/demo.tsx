'use client'

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function Demo() {
  const options = ["MP4 to MP3", "MP4 to Gif", "PNG to JPG", "WEBM to PNG/JPG"]
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % options.length)
    }, 1000)

    return () => clearInterval(timer)
  }, [options.length])

  return (
    <div
      id="demo"
      className="bg-gradient-to-t from-gr1 to-gr2 border rounded-md p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <div className="flex items-center space-x-1 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="font-mono text-sm ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-bold text-green-500">
              <span className="font-bold text-2xl">→</span> Videos
              <span className="ml-2 text-black">dzomo .</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4"
          >
            📂 Using directory: /Videos
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            ? Choose the type of conversion you want to perform:
          </motion.div>
          <ul className="ml-4">
            {options.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 3.5 + index * 0.5 }}
                className={cn(
                  index === highlightedIndex && "text-green-300",
                  "transition-colors duration-300 relative"
                )}
              >
                {index === highlightedIndex && (
                  <motion.span layoutId="arrow" className="absolute left-0">
                    ❯
                  </motion.span>
                )}
                <span className={cn(
                  "ml-4",
                  index === highlightedIndex && "underline"
                )}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
