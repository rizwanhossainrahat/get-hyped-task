'use client'
import React, { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface ContentCardProps {
  text: string
  btnText: string
  borderColor: string
  btnBg: string
  videoSrc: string
}

const contentCards: ContentCardProps[] = [
  {
    text: "Van nul naar vol, binnen 3 weken",
    btnText: "Bullit",
    borderColor: "#FA5424",
    btnBg: "#FC997B",
    videoSrc: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"
  },
  {
    text: "Zacht in smaak, sterk in beeld",
    btnText: "Roasta",
    borderColor: "#0D8DFF",
    btnBg: "#28AAFF",
    videoSrc: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4"
  },
  {
    text: "Content die écht smaakt (en raakt)",
    btnText: "Loco",
    borderColor: "#33C791",
    btnBg: "#73E2B6",
    videoSrc: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4"
  }
]

export default function Content() {
  return (
    <section className="bg-[#FAF4EC] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20 md:w-1/2 ml-30">
          <h2 className="text-5xl md:text-[5.5rem] font-bold leading-none mb-6">
            Content <br /> dat scoort.
          </h2>

          <p className="text-xl md:text-2xl font-semibold text-black/80">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
          </p>

          <motion.button
            whileHover={{ rotate: -4 }}
            className="mt-8 flex items-center gap-3 pl-5 pr-1 py-1 border border-black rounded-lg font-bold"
          >
            <span>Bekijk al ons werk</span>
            <span className="bg-black text-white p-2 rounded-md">
              <ArrowRight size={18} />
            </span>
          </motion.button>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-12 flex-wrap">
          {contentCards.map((card, i) => (
            <ContentCard key={i} {...card} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ContentCard({
  text,
  btnText,
  borderColor,
  btnBg,
  videoSrc,
  index
}: ContentCardProps & { index: number }) {

  const videoRef = useRef<HTMLVideoElement>(null)

  const offset = [80, 40, 0][index] || 0

  return (
    <div
      style={{
        borderColor,
        marginTop: offset
      }}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
      className="group relative w-full max-w-[280px] h-[420px] rounded-[1.6rem] border-[6px] bg-white overflow-hidden transition-all duration-500 hover:rotate-[-3deg] hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
    >

      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      >
        <source src={videoSrc} />
      </video>

      {/* Bottom */}
      <div className="absolute bottom-0 w-full">

        {/* Arrow */}
        <div className="absolute right-3 bottom-24 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
          <ArrowUpRight size={18} />
        </div>

        {/* Text Box */}
        <div
          style={{ backgroundColor: borderColor }}
          className="p-4 text-white"
        >
          <h3 className="text-lg font-semibold mb-2">{text}</h3>

          <span
            style={{ backgroundColor: btnBg }}
            className="px-4 py-1 rounded-md text-sm"
          >
            {btnText}
          </span>
        </div>

      </div>
    </div>
  )
}