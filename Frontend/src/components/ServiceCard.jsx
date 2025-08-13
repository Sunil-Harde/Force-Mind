import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: '0 10px 25px -5px rgba(0, 240, 255, 0.2)',
      }}
      transition={{ duration: 0.3 }}
      className="bg-dark border border-gray-800 rounded-xl p-6 flex flex-col hover:border-primary transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <div className="w-6 h-6 text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-amard-50 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>

      {/* <!-- From Uiverse.io by Smit-Prajapati --> */}
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">3D Card</span>
            <p className="card-content">
              className ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <span className="see-more">See More</span>
          </div>
          {/* <div className="date-box">
            <span className="month">JUNE</span>
            <span className="date">29</span>
          </div> */}
        </div>
      </div>

    </motion.div>
  );
};

export default ServiceCard;