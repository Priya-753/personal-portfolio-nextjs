import React from 'react'
import Image from 'next/image'
import html from '../../public/assets/html.png'
import css from '../../public/assets/css3.png'
import js from '../../public/assets/javascript.png'
import react from '../../public/assets/react.png'
import redux from '../../public/assets/redux.png'
import typescript from '../../public/assets/typescript.png'
import java from '../../public/assets/java.png'
import next from '../../public/assets/nextjs.png'
import bootstrap from '../../public/assets/bootstrap.png'
import tailwind from '../../public/assets/tailwind.png'
import github from '../../public/assets/github.png'
import python from '../../public/assets/python.png'
import material from '../../public/assets/material.png'
import dsa from '../../public/assets/data-structure.png'
import { motion } from 'framer-motion';

const Skills = () => {
    const frontEndSkills = [
        { skill: 'Next JS', src: next, level: 3 },
        { skill: 'React', src: react, level: 3 },
        { skill: 'Redux', src: redux, level: 3 },
        { skill: 'Typescript', src: typescript, level: 3 },
        { skill: 'HTML5', src: html, level: 3 },
        { skill: 'CSS3', src: css, level: 3 },
        { skill: 'Javascript', src: js, level: 3 },
        { skill: 'Material UI', src: material, level: 3 },
        { skill: 'Bootstrap', src: bootstrap, level: 3 },
        { skill: 'Tailwind', src: tailwind, level: 3 },
    ];

    const backEndSkills = [
        { skill: 'Java', src: java, level: 3 },
        { skill: 'Python', src: python, level: 3 },
        { skill: 'Spring Boot', src: redux, level: 3 },
        { skill: 'Hibernate', src: typescript, level: 3 },
    ];

    const toolsEndSkills = [
        { skill: 'Git/Github', src: github, level: 3 },
    ];

    const fundamentals = [
        { skill: 'DSA', src: dsa, level: 3}
    ]

    const levels = {
        1: 'w-1/4',  // 25%
        2: 'w-2/4',  // 50%
        3: 'w-3/4',  // 75%
        4: 'w-full'  // 100%
    };

    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Skills
                    </p>
                    <h2 className='py-4'>What I Can Do</h2>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }} >
                    <h3 className='py-5'>Front End</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
                        {frontEndSkills.map((skillDetail, index) => {
                            return (
                                <div className='p-6 ease-in duration-300'>
                                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3>{skillDetail.skill}</h3>
                                        </div>
                                        <div className='m-auto'>
                                            <Image src={skillDetail.src} width='35' height='35' alt='/' />
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <div className="w-full bg-gray-200 h-1 flex justify-between ">
                                            <div className={`${levels[skillDetail.level]} bg-green-500 h-1`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className='py-5'>Back End</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
                        {backEndSkills.map((skillDetail, index) => {
                            return (
                                <div className='p-6 ease-in duration-300'>
                                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3>{skillDetail.skill}</h3>
                                        </div>
                                        <div className='m-auto'>
                                            <Image src={skillDetail.src} width='35' height='35' alt='/' />
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <div className="w-full bg-gray-200 h-1 flex justify-between ">
                                            <div className={`${levels[skillDetail.level]} bg-green-500 h-1`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className='py-5'>Tools</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
                        {toolsEndSkills.map((skillDetail, index) => {
                            return (
                                <div className='p-6 ease-in duration-300'>
                                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3>{skillDetail.skill}</h3>
                                        </div>
                                        <div className='m-auto'>
                                            <Image src={skillDetail.src} width='35' height='35' alt='/' />
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <div className="w-full bg-gray-200 h-1 flex justify-between ">
                                            <div className={`${levels[skillDetail.level]} bg-green-500 h-1`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills