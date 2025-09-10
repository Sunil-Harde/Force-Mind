import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BuildingOfficeIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import AboutCard from '../components/AboutCard';

const About = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const about = [
    {
      icon: <BuildingOfficeIcon />,
      title: "Our Story",
      description: " To empower businesses through innovative technology solutions that drive growth and efficiency."
    },
    {
      icon: <RocketLaunchIcon />,
      title: "Our Visio",
      description: "To empower businesses through innovative technology solutions that drive growth and efficiency."
    },
    {
      icon: <UserGroupIcon />,
      title: "Our Team",
      description: "To empower businesses through innovative technology solutions that drive growth and efficiency."
    },
    {
      icon: <UserGroupIcon />,
      title: "Our Team",
      description: "To empower businesses through innovative technology solutions that drive growth and efficiency."
    },
    {
      icon: <RocketLaunchIcon />,
      title: "Our Visio",
      description: "To empower businesses through innovative technology solutions that drive growth and efficiency."
    },
    {
      icon: <UserGroupIcon />,
      title: "Our Visio",
      description: "To empower businesses through innovative technology solutions that drive growth and efficiency."
    },

  ]

  return (
    <section className="py-20 bg-linear-to-bl from-gray-900 to-gray-100 text-amber-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className='text-white'>Us</span> </h2>
          <p className="text-black max-w-2xl mx-auto">
            We are a team of passionate technologists dedicated to delivering innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-black mb-4">
             We are an IT service company offering a comprehensive range of support to help digitalize all types of businesses.
            </p>
            <p className="text-black">
              All types of infrastructure, including warehouses, small offices, corporate offices manufacturing departments, IT/OT infrastructure, security systems, access control, schools, and colleges, will be designed and operated more smoothly.
            </p>
          </motion.div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-darker rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our team"
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-primary text-dark font-bold px-9 rounded-lg shadow-lg"
            >
              Since 2015
            </motion.div>
          </motion.div>
        </div>

        {/* About card sections  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {
            about.map((items, index) => {
              return (
                <div
                  key={index}
                  className="holographic-container">
                  <div className="holographic-card">
                    <motion.div
                      ref={ref3}
                      initial="hidden"
                      animate={inView3 ? "visible" : "hidden"}
                      variants={fadeIn}
                      transition={{ duration: 0.5 }}
                      className="bg-dark border border-gray-800 rounded-xl p-8 hover:border-primary transition-all duration-300"
                    >
                      <AboutCard
                        icon={items.icon}
                        title={items.title}
                        description={items.description}
                      />
                    </motion.div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default About;