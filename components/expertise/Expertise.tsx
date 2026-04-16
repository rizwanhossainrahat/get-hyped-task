'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CardProps {
    id: string;
    title: string;
    subTitle: string;
    desc: string;
    video: string;
    href: string;
    bg: string;
    color: string;
    badgeBg: string;
    borderColor: string;
    btnBg: string;
    btnText: string;
    text: string;
    i: number;
}

const cards = [ 
    { id: '01', title: 'Social strategy', subTitle: 'Slimme strategie. Sterke start.', desc: 'We duiken diep in jouw merk, doelgroup en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.', video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4', href: '/expertises/social-strategie', text: 'socialstrategie', bg: '#FFFFFF', color: 'black', badgeBg: '#EAE4D8', borderColor: '#FA5424', btnBg: '#FA5424', btnText: 'white' },
     { id: '02', title: 'Content creation', subTitle: 'Content die opvalt en raakt.', desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek.', video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4', href: '/expertises/content-creatie', text: 'content creatie', bg: '#FCB8FA', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black' }, 
     { id: '03', title: 'Activation', subTitle: 'Zichtbaar waar en wanneer het telt.', desc: 'We verspreiden content waar jouw doelgroep is.', video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4', href: '/expertises/activatie', text: 'activatie', bg: '#33C791', color: 'black', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black' }, 
     { id: '04', title: 'Data', subTitle: 'Inzichten die impact maken.', desc: 'We duiken in de cijfers om te snappen what écht werkt.', video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4', href: '/expertises/data', text: 'data', bg: '#0D8DFF', color: 'white', badgeBg: '#FFFFFF', borderColor: '#FFFFFF', btnBg: '#FFFFFF', btnText: 'black' }, 
    ]

function Card({
    id,
    title,
    subTitle,
    desc,
    video,
    href,
    bg,
    color,
    badgeBg,
    borderColor,
    btnBg,
    btnText,
    text,
    i
}: CardProps) {

    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    // 🔥 stronger stacking animation
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
    const y = useTransform(scrollYProgress, [0, 1], [100, 0])

    return (
        <div
            ref={container}
            className="h-[100vh] flex items-center justify-center sticky"
            style={{
                top: `${i * 25}px`, // 🔥 stack offset
                zIndex: 10 + i
            }}
        >
            <motion.div
                style={{
                    scale,
                    y,
                    backgroundColor: bg,
                    color
                }}
                className="relative w-full rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-6 shadow-xl border border-black/5 overflow-hidden"
            >
                {/* Top */}
                <div className="flex justify-between items-start w-full">
                    <Link href={href}>
                        <span
                            style={{ backgroundColor: badgeBg }}
                            className="px-4 py-1.5 rounded-[0.7rem] font-medium text-black"
                        >
                            Expertise
                        </span>
                    </Link>

                    <span className="text-[5.5rem] font-bold opacity-10 leading-[0.5] select-none mr-4">
                        {id}
                    </span>
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-end flex-1">

                    <div className="flex flex-col justify-between py-2">

                        <Link href={href}>
                            <h2 className="text-3xl md:text-[5.2rem] font-semibold tracking-tighter leading-[0.9] cursor-pointer select-none">
                                {title}
                            </h2>
                        </Link>

                        <div className="flex flex-col gap-0">

                            <h3 className="text-2xl font-semibold">
                                {subTitle}
                            </h3>

                            <p className="md:w-[50%] text-[1.2rem] leading-[1.2] font-semibold">
                                {desc}
                            </p>

                            <Link href={href}>
                                <motion.button
                                    style={{ backgroundColor: btnBg, color: btnText }}
                                    className="mt-6 w-fit flex items-center gap-3 pl-6 pr-2 py-1.5 border border-black/10 rounded-2xl font-semibold"
                                    whileHover={{ rotate: -4 }}
                                >
                                    <span>Meer over {text}</span>
                                    <ArrowRight size={18} />
                                </motion.button>
                            </Link>

                        </div>
                    </div>

                    {/* Video */}
                    <Link href={href}>
                        <motion.div
                            style={{ borderColor }}
                            className="w-full md:max-w-[20rem] md:aspect-3/4 rounded-[2.5rem] overflow-hidden border-[6px]"
                            whileHover={{ scale: 1.02 }}
                        >
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                <source src={video} type="video/mp4" />
                            </video>
                        </motion.div>
                    </Link>

                </div>
            </motion.div>
        </div>
    )
}

export default function Expertise() {
    return (
        <section className="bg-[#FAF4EC] py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col">
                {cards.map((card, i) => (
                    <Card key={card.id} {...card} i={i} />
                ))}
            </div>
        </section>
    )
}