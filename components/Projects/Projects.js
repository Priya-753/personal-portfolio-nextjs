import React from 'react'
import { motion } from 'framer-motion';
import WorkProject from './WorkProject'
import dsa from '../../public/assets/data-structure.png'

const Projects = () => {
    const projects = [
        //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
        //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
        {
            name: 'Dunder Mifflin', //project name
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum', //project description
            githubLink: '', //github repo link
            projectLink: '', //deployed project link
            tech: ['Tech1', 'Tech2', 'Tech3'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
            photo: [dsa, dsa, dsa], //list of names of images from above imports.
        },
        {
            name: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
            githubLink: '/',
            projectLink: '/',
            tech: ['Tech1', 'Tech2', 'Tech3'],
            photo: [dsa, dsa, dsa],
        },
        {
            name: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
            githubLink: '/',
            projectLink: '/',
            tech: ['Tech1', 'Tech2', 'Tech3'],
            photo: [dsa, dsa, dsa],
        },
    ]

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Projects
                    </p>
                    <h2 className='py-4'>What I&apos;ve Built</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                    className='grid md:grid-cols-2 gap-8'>

                    <div className="relative mx-auto py-10 px-5 max-w-4xl">
                        <div className="py-6 px-10">
                            {projects.map((project, key) => (
                                <div key={key} data-aos="fade-up" className="mb-12">
                                    <WorkProject project={project} id={key} />
                                </div>
                            ))}
                        </div>
                        {/* {userinfo.experience.visible && (
                            <div className="max-w-3xl mx-auto mb-16">
                                <Experiences currentTheme={currentTheme} />
                            </div>
                        )}
                        {userinfo.blogs.visible && (
                            <div className="bg-currentTheme-secondary">
                                {blogList && (
                                    <Carousel currentTheme={currentTheme}>
                                        {blogList.slice(0, 6).map((blog, key) => (
                                            <CarouselItem key={key} currentTheme={currentTheme}>
                                                <BlogCard blog={blog} currentTheme={currentTheme} />
                                            </CarouselItem>
                                        ))}
                                    </Carousel>
                                )}
                            </div>
                        )} */}
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Projects