import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { 
//   FacebookIcon, 
//   TwitterIcon, 
//   LinkedInIcon, 
//   GithubIcon 
// } from './SocialIcons';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

//   const socialLinks = [
//     { name: 'Facebook', icon: <FacebookIcon />, url: '#' },
//     { name: 'Twitter', icon: <TwitterIcon />, url: '#' },
//     { name: 'LinkedIn', icon: <LinkedInIcon />, url: '#' },
//     { name: 'GitHub', icon: <GithubIcon />, url: '#' },
//   ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-darker py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-dark font-bold text-xl">IT</span>
              </div>
              <span className="text-white font-bold text-xl">TechSolutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading IT solutions provider with cutting-edge technology and
              exceptional service.
            </p>
            <div className="flex space-x-4">
              {/* {socialLinks.map((social) => (
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
              ))} */}
            </div>
          </div>

          <div>
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
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">123 Tech Street</p>
              <p className="mb-2">San Francisco, CA 94107</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Email: info@techsolutions.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

// Social Icons (you can replace with actual Heroicons or other icons)
// const FacebookIcon = () => {};

// const TwitterIcon = () =>  {}

// const LinkedInIcon = () => {}

// const GithubIcon = () => {}

export default Footer;