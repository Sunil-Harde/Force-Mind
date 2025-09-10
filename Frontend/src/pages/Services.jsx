import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../components/ServiceCard';
import BgAnimation from '../components/BgAnimation';
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
      title: "Desktop support services",
      description: "Custom websites and web applications built with modern technologies for optimal performance."
    },
    {
      icon: <DevicePhoneMobileIcon />,
      title: "IT Comprehensive Infra design, implement and operation",
      description: "iOS and Android apps that deliver seamless user experiences across all devices."
    },
    {
      icon: <CloudIcon />,
      title: "CCTV and Access Control Systems",
      description: "Scalable cloud infrastructure and services to power your business growth."
    },
    {
      icon: <CpuChipIcon />,
      title: "Application and Website Development",
      description: "Custom software solutions tailored to your specific business requirements."
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Entry-Level IT Training and Certifications",
      description: "Comprehensive security solutions to protect your digital assets and data."
    },
    {
      icon: <ChartBarIcon />,
      title: "Training and Development for College Interns",
      description: "Expert advice to help you make the right technology decisions for your business."
    }, {
      icon: <ChartBarIcon />,
      title: "Hiring and Recruitment Solutions",
      description: "Expert advice to help you make the right technology decisions for your business."
    }, {
      icon: <ChartBarIcon />,
      title: "Resource Provisioning",
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
    <section className="  overflow-hidden min-h-screen relative py-20 bg-gray-900 text-amber-500">

      <div className="absolute min-h-screen w-screen " >

        <BgAnimation />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="m-auto p-5 w-2xl backdrop-blur-lg">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 "> Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs and drive growth.
            </p>
          </div>
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