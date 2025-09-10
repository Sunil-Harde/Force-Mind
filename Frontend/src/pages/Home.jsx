import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ParticleBackground from '../components/ParticleBackground';
import OurTechnology from '../components/OurTechnology';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import BgImg from "../assets/Img/img4.jpg"
import BgAnimation from "../components/BgAnimation"
const Home = () => {
  const [animateBg, setAnimateBg] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const [initialImgStyle] = useState({
    width: isMobile ? '30%' : '25%',
    height: isMobile ? '30vh' : '25vh',
  });

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBg(true), 1050);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="bg-gray-900 min-h-screen flex items-center justify-center">
        <motion.section className="relative min-h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
          <>
            <motion.img
              src={BgImg}
              alt=""
              className="absolute"
              height={"100vh"}
              width={"100%"}
              type='spring'
              initial={{
                width: initialImgStyle.width,
                height: initialImgStyle.height,
                top: -90,
                left: "50%",
                x: "-50%",
                y: 0,
                borderRadius: "5%",
              }}
              animate={
                animateBg
                  ? {
                    width: "100vw",
                    height: "100vh",
                    borderRadius: "0%",
                    top: 0,
                  }
                  : {
                    top: 0,
                    left: "50%",
                    y: "37vh",
                    borderRadius: "5%",
                  }
              }
              transition={{ duration: 0.8, ease: "easeInOut" , type: "spring",}}
            />

            <ParticleBackground />

            <div className="container mx-auto px-4 z-10">
              <div className="max-w-3xl mx-auto text-center">
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.4,  type: "spring", }}
                    className="mb-6"
                  >
                    <span className="text-gray-400 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Ritilink Private Limited
                    </span>
                  </motion.div>

                  <AnimatedText
                    text="The  Right  Link  For  IT  Success"
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-amber-500 pl-10"
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7, duration: 0.5, type: "spring", }}
                    
                    className="sm:text-xl text-blue-600 mb-8 max-w-2xl mx-auto"
                  >
                    We deliver cutting-edge technology solutions tailored to
                    your business needs, helping you stay ahead in the digital
                    world.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="flex flex-row justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-amber-500 cursor-pointer text-dark font-bold px-2 sm:px-8 py-3 rounded-lg flex items-center justify-center gap-2"
                    >
                      Get Started <ArrowRightIcon className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-primary text-primary font-bold px-8 py-3 rounded-lg text-gray-400 cursor-pointer hover:text-amber-500"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 flex flex-col items-center"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <div className="w-4 h-8 border-2 border-gray-400 rounded-full">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1"
                  />
                </div>
              </motion.div>
            </motion.div>
          </>

        </motion.section>

      </section>

      <div className="py-10 min-h-screen flex items-center justify-center bg-gray-900 relative">
        <BgAnimation/>
        <OurTechnology />
      </div>
    </div>
  );
};

export default Home;
