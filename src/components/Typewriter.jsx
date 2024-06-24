// src/Typewriter.js
import React, { useEffect, useState } from "react"

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] =
    useState("")
  const [currentIndex, setCurrentIndex] =
    useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(
        (prev) => prev + text[currentIndex]
      )
      setCurrentIndex(
        (prevIndex) => prevIndex + 1
      )
    }, 50)

    if (currentIndex >= text.length) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [currentIndex, text])

  return (
    <div className="flex md:items-start h-[50px] justify-center items-center">
      <div className="relative">
        <div className="text-[18px] font-normal  inline-block text-center md:text-start ">
          {displayedText}
        </div>
      </div>
    </div>
  )
}

export default Typewriter
