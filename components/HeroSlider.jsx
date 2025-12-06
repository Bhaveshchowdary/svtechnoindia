"use client"

import { useState, useEffect } from "react"
import "./HeroSlider.css"

const slides = [
  {
    text: "Engineering is achieving function while avoiding failure.",
    image: "/hero1.jpg"
  },
  {
    text: "One man's ‘magic’ is another man's engineering.",
    image: "/hero2.jpg"
  },
  {
    text: "Strive for perfection in everything you do.",
    image: "/hero3.jpg"
  }
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const next = () => {
    setPrevIndex(index)
    setIndex((index + 1) % slides.length)
    setIsFading(true)
  }

  const prev = () => {
    setPrevIndex(index)
    setIndex((index - 1 + slides.length) % slides.length)
    setIsFading(true)
  }

  useEffect(() => {
    const timer = setInterval(() => next(), 6000)
    return () => clearInterval(timer)
  }, [index])

  useEffect(() => {
    const timer = setTimeout(() => setIsFading(false), 1200) // duration of dissolve
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className="hero-slider">
      
      {/* PREVIOUS IMAGE — fades OUT */}
      <img
        src={slides[prevIndex].image}
        className={`hero-bg ${isFading ? "fade-out" : "hidden-img"}`}
      />

      {/* CURRENT IMAGE — fades IN */}
      <img
        src={slides[index].image}
        className={`hero-bg ${isFading ? "fade-in" : "visible-img"}`}
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>{slides[index].text}</h1>
        <button className="hero-btn">Discover More</button>
      </div>

      <div className="hero-arrows">
        <button onClick={prev} className="arrow-btn">←</button>
        <button onClick={next} className="arrow-btn">→</button>
      </div>
    </div>
  )
}
