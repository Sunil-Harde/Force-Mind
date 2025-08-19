import { motion } from 'framer-motion'
import React from 'react'



function OurTechnology() {


    const backEnd = ["Network Security", "SDN (Software Defined Networking)", " Routing & Switching", " Network Automation", " Cloud Networking ", "Machina Learning"]
    const devOps = ["Continuous Integration", "Continuous Deployment", "Infrastructure as Code", " Network Automation", " Monitoring & Logging ", "Containerization & Orchestration"]
    const frontEnd = ["HTML", "CSS", "JavaScript", "React", "Tailwind Css", "Bootstrap"]

    return (
        <motion.div className='flex flex-col items-center justify-center px-5' >

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

                  
                    <div className='flex flex-col  items-start backdrop-blur-md py-10 px-5 lg:p-10 rounded-4xl gap-5 max-w-150'>

                        <motion.h1 className='font-bold text-gray-50 ml-2' initial={{ y: "-60px", opacity: "0" }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-90px", once: "true" }} transition={{ duration: .6, }} > DevOps </motion.h1>

                        <div className=" flex flex-wrap gap-5 flex-row">
                            {
                                devOps.map((item, index) => {
                                    return (

                                        <motion.p className='bg-gray-950 text-gray-50 px-4 py-2 rounded' initial={{ y: "-60px", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-90px", once: "true" }} transition={{ duration: .5, delay: index * 0.3 }} >{item}</motion.p>

                                    )
                                })
                            }
                        </div>

                        <motion.div initial={{ y: "-60px", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-30px", once: "true" }} transition={{ duration: 1.5, delay: 0.8 }}>
                            <motion.a href="#" className='text-gray-50 font-bold ml-2 hover:text-amber-500 cursor-no-drop' >Hire Backend Developer -></motion.a>
                        </motion.div>
                    </div>



                </div>

                <div className="flex flex-col justify-center items-center gap-4">

                    <div className='flex flex-col  items-start backdrop-blur-md py-10 px-5 lg:p-10 rounded-4xl gap-5 max-w-150'>

                        <motion.h1 className='font-bold text-gray-50 ml-2' initial={{ y: "-60px", opacity: "0" }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-90px", once: "true" }} transition={{ duration: .6, }} > Frontend Development </motion.h1>

                        <div className=" flex flex-wrap gap-5 flex-row">
                            {
                                frontEnd.map((item, index) => {
                                    return (

                                        <motion.p className='bg-gray-950 text-gray-50 px-4 py-2 rounded' initial={{ y: "-60px", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-90px", once: "true" }} transition={{ duration: .5, delay: index * 0.3 }} >{item}</motion.p>

                                    )
                                })
                            }
                        </div>

                        <motion.div initial={{ y: "-60px", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-30px", once: "true" }} transition={{ duration: 1.5, delay: 0.8 }}>
                            <motion.a href="#" className='text-gray-50 font-bold ml-2 hover:text-amber-500 cursor-no-drop' >Hire Backend Developer -></motion.a>
                        </motion.div>
                    </div>

                    <div className='flex flex-col  items-start backdrop-blur-md py-10 px-5 lg:p-10 rounded-4xl gap-5 max-w-150'>

                        <motion.h1 className='font-bold text-gray-50 ml-2' initial={{ y: "-60px", opacity: "0" }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-90px", once: "true" }} transition={{ duration: .6, }} > Networking </motion.h1>

                        <div className=" flex flex-wrap gap-5 flex-row">
                            {
                                backEnd.map((item, index) => {
                                    return (

                                        <motion.p className='bg-gray-200 text-gray-900 px-4 py-2 rounded' initial={{ y: "-60px", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-90px", once: "true" }} transition={{ duration: .5, delay: index * 0.3 }} >{item}</motion.p>

                                    )
                                })
                            }
                        </div>

                        <motion.div initial={{ y: "-60px", opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ margin: "-30px", once: "true" }} transition={{ duration: 1.5, delay: 0.8 }}>
                            <motion.a href="#" className='text-gray-50 font-bold ml-2 hover:text-amber-500 cursor-no-drop' >Hire Backend Developer -></motion.a>
                        </motion.div>
                    </div>




                </div>


            </section>
        </motion.div>
    )
}

export default OurTechnology