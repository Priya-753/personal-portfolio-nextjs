import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import dsa from '../../public/assets/data-structure.png'

const Education = () => {
    const timelineData = [
        {
            date: "2024",
            title: "Company A",
            description: "Worked on innovative projects in AI.",
            logoSrc: dsa, // Replace with actual path
        },
        {
            date: "2023",
            title: "Company B",
            description: "Contributed to major development milestones.",
            logoSrc: "/path-to-logo-b.png", // Replace with actual path
        },
        // Add more timeline entries as needed
    ];


    return (
        <div id='education' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Education
                    </p>
                    <h2 className='py-4'>...</h2>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }} >
                    <div className="relative mx-auto py-10 px-5 max-w-4xl">
            <div className="absolute left-1/2 top-0 w-px h-full bg-gray-300 transform -translate-x-1/2"></div>
            <ul className="list-none p-0 m-0">
                {timelineData.map((item, index) => (
                    <li
                        key={index}
                        className="relative mb-12"
                    >
                        <div className="flex items-center">
                            <div className="w-16 h-16 mr-4 flex-shrink-0">
                                <Image src={item.logoSrc} alt={item.title} width={64} height={64} className="object-cover rounded-full" />
                            </div>
                            <div className="w-full">
                                <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300">
                                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                    <span className="text-gray-400 text-xs">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Education
