import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#' },
    { name: 'GitHub', icon: <FaGithub />, url: '#' },
  ];

  return (
    <motion.footer className=" z-1 bg-darker py-12 pl-10 bg-gray-800">
      <motion.div  className="mx-auto px-4" >
        <motion.div  className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div  className="">
            <motion.div  className="flex items-center space-x-2 mb-4">
              <motion.div  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-dark font-bold text-xl" initial={{opacity:0, marginTop:-20}}  transition={{duration:0.5}}>IT</span>
              </motion.div >
              <span className="text-white font-bold text-xl">TechSolutions</span>
            </motion.div >
            <p className="text-gray-400 mb-4">
              Leading IT solutions provider with cutting-edge technology and
              exceptional service.
            </p>
            <motion.div  className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#00f0ff' }}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div >
          </motion.div >

          <motion.div  className="flex flex-col justify-center items-center">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div >

          <motion.div  >
            <h3 className="text-white font-bold text-lg mb-4 ">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">Ritilink Private Limited</p>
              <p className="mb-2">Pune Maharashtra</p>
              <p className="mb-2">Phone: +91 9270355138</p>
              <p>Email: info@ritilink.com</p>
            </address>
          </motion.div >
        </motion.div >

        <motion.div  className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ritilink Private Limited. All rights reserved.</p>
        </motion.div >
      </motion.div >
    </motion.footer>
  );
};



export default Footer;