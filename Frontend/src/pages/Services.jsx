import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../components/ServiceCard';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon, 
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: <CodeBracketIcon />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance."
    },
    {
      icon: <DevicePhoneMobileIcon />,
      title: "Mobile App Development",
      description: "iOS and Android apps that deliver seamless user experiences across all devices."
    },
    {
      icon: <CloudIcon />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your business growth."
    },
    {
      icon: <CpuChipIcon />,
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business requirements."
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data."
    },
    {
      icon: <ChartBarIcon />,
      title: "IT Consulting",
      description: "Expert advice to help you make the right technology decisions for your business."
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to meet your business needs and drive growth.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;