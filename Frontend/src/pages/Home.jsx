import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ParticleBackground from '../components/ParticleBackground';
import OurTechnology from '../components/OurTechnology';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden " >
        <ParticleBackground />

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Innovative IT Solutions
              </span>
            </motion.div>

            <AnimatedText
              text="Transforming Ideas Into Digital Reality"
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-amber-500"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"

            >
              We deliver cutting-edge technology solutions tailored to your business
              needs, helping you stay ahead in the digital world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-dark font-bold px-8 py-3 rounded-lg flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary font-bold px-8 py-3 rounded-lg"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
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

      </section>

      <div>
        <OurTechnology/>
      </div>



    </div>
  );
};

export default Home;