import { motion } from 'framer-motion'
import React from 'react'



function OurTechnology() {
    return (
        <div className='flex flex-col items-center justify-center px-5'>

            <div className='relative'>

                <motion.div className="h-15 w-15 bg-amber-500 absolute top-3 left-0 rounded-l-xl" initial={{ left: 0 }} viewport={{ margin: "-70px" }} whileInView={{ left: -90 }} transition={{ duration: .5 }}></motion.div>
                <h1 className='font-bold text-4xl mt-5 mb-20 text-amber-50'>About</h1>
                <motion.div className="h-15 w-15 bg-amber-500 absolute top-3 right-0  rounded-r-xl" initial={{ right: 0 }} viewport={{ margin: "-70px" }} whileInView={{ right: -90 }} transition={{ duration: .5 }}></motion.div>
            </div>

            <section className="grid md:grid-cols-2 gap-5 ">

                <div className="flex flex-col gap-5 items-center">

                    <div className='   gap-5 max-w-150 ' >
                        <motion.h1 className="font-bold text-5xl text-gray-50 ">
                            <motion.span
                                className="text-amber-500 inline-block"
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-90px" }}
                            >
                                Technology
                            </motion.span>{' '}
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-90px" }}
                            >
                                expertise to meet your needs
                            </motion.span>
                        </motion.h1>
                    </div>

                    <motion.div className='flex flex-col backdrop-blur-md items-start py-10 px-5 lg:p-10 rounded-4xl gap-5 max-w-150' initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true, margin: "-90px" }}>


                        <motion.h1 className='font-bold text-gray-200 ml-2'initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true, margin: "-90px" }} > Frontend Development</motion.h1>
                        <div className=" flex flex-wrap gap-5">
                        <motion.p className='bg-gray-400 px-4 py-2 rounded'> HTML</motion.p>
                        <motion.p className='bg-gray-400 px-4 py-2 rounded'> CSS</motion.p>
                        <motion.p className='bg-gray-400 px-4 py-2 rounded'> JavaScript</motion.p>
                        <motion.p className='bg-gray-400 px-4 py-2 rounded'> React</motion.p>
                        <motion.p className='bg-gray-400 px-4 py-2 rounded'> Tailwind css</motion.p>
                        <motion.p className='bg-gray-400 px-4 py-2 rounded'> Bootstrap</motion.p>
                        </div>

                        <div>
                            <a href="#" className='text-gray-50 font-bold ml-2 hover:text-amber-500 cursor-no-drop'>Hire Backend Developer -></a>
                        </div>
                    </motion.div>

                    <div className='flex flex-col  items-start backdrop-blur-md py-10 px-5 lg:p-10  rounded-4xl gap-5 max-w-150'>
                        <h1 className='font-bold text-gray-50 ml-2'> Networking</h1>
                        <div className=" flex flex-wrap gap-5">
                            <p className='bg-gray-900 px-4 py-2 rounded text-gray-50'>Network Security</p>
                            <p className='bg-gray-900 px-4 py-2 rounded text-gray-50'>SDN (Software Defined Networking)</p>
                            <p className='bg-gray-900 px-4 py-2 rounded text-gray-50'> Routing & Switching</p>
                            <p className='bg-gray-900 px-4 py-2 rounded text-gray-50'>  Network Automation</p>
                            <p className='bg-gray-900 px-4 py-2 rounded text-gray-50'> Cloud Networking  </p>
                            <p className='bg-gray-900 px-4 py-2 rounded text-gray-50'>Machina Learning</p>
                        </div>

                        <div>
                            <a href="#" className='text-gray-50 font-bold ml-2 hover:text-amber-500 cursor-no-drop'>Hire Backend Developer -></a>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col justify-center items-center gap-4">


                    <div className='flex flex-col  items-start backdrop-blur-md py-10 px-5 lg:p-10 rounded-4xl gap-5 max-w-150'>
                        <h1 className='font-bold text-gray-100 ml-2'> Artificial Intelligence</h1>
                        <div className=" flex flex-wrap gap-5">
                            <p className='bg-gray-400 px-4 py-2 rounded text-gray-900'>Machina Learning</p>
                            <p className='bg-gray-400 px-4 py-2 rounded text-gray-900'> Learning</p>
                            <p className='bg-gray-400 px-4 py-2 rounded text-gray-900'> Learning</p>
                            <p className='bg-gray-400 px-4 py-2 rounded text-gray-900'> Learning</p>
                            <p className='bg-gray-400 px-4 py-2 rounded text-gray-900'>Machina Learning</p>
                            <p className='bg-gray-400 px-4 py-2 rounded text-gray-900'>Machina Learning</p>
                        </div>

                        <div>
                            <a href="" className='text-gray-100 font-bold ml-2 hover:text-amber-500 cursor-no-drop'>Hire Backend Developer -></a>
                        </div>
                    </div>

                    <div className='flex flex-col  items-start backdrop-blur-md py-10 px-5 lg:p-10 rounded-4xl gap-5 max-w-150'>


                        <h1 className='font-bold text-gray-50 ml-2'> Backend Development</h1>
                        <div className=" flex flex-wrap gap-5">
                            <p className='bg-gray-950 text-gray-50 px-4 py-2 rounded'>Python</p>
                            <p className='bg-gray-950 text-gray-50 px-4 py-2 rounded'> Fast API</p>
                            <p className='bg-gray-950 text-gray-50 px-4 py-2 rounded'> Django</p>
                            <p className='bg-gray-950 text-gray-50 px-4 py-2 rounded'> NodeJS</p>
                            <p className='bg-gray-950 text-gray-50 px-4 py-2 rounded'> Rest API</p>
                            <p className='bg-gray-950 text-gray-50 px-4 py-2 rounded'> Java</p>
                        </div>

                        <div>
                            <a href="#" className='text-gray-50 font-bold ml-2 hover:text-amber-500 cursor-no-drop'>Hire Backend Developer -></a>
                        </div>
                    </div>


                    <div className='flex flex-col  items-start backdrop-blur-md py-10 px-5 lg:p-10 rounded-4xl gap-5 max-w-150'>

                        <h1 className='font-bold text-gray-200 ml-2'>DevOps</h1>
                        <div className=" flex flex-wrap gap-5 ">
                            <p className='bg-gray-400 text-back px-4 py-2 rounded'>Continuous Integration  </p>
                            <p className='bg-gray-400 text-back px-4 py-2 rounded'>  Continuous Deployment</p>
                            <p className='bg-gray-400 text-back px-4 py-2 rounded'> Infrastructure as Code</p>
                            <p className='bg-gray-400 text-back px-4 py-2 rounded'>Monitoring & Logging</p>
                            <p className='bg-gray-400 text-back px-4 py-2 rounded'>Containerization & Orchestration</p>
                        </div>

                        <div>
                            <a href="#" className='text-gray-200 font-bold ml-2 hover:text-amber-500 cursor-no-drop' >Hire Backend Developer -></a>
                        </div>
                    </div>



                </div>


            </section>
        </div>
    )
}

export default OurTechnology