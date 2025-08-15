import { useInView } from 'react-intersection-observer';
import React from "react";
import { motion } from 'framer-motion';
import { BuildingOfficeIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/outline';

function AboutCard({ icon, title, description }) {

    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="holographic-container">
            <div className="holographic-card">
                <motion.div
                    ref={ref3}
                    initial="hidden"
                    animate={inView3 ? "visible" : "hidden"}
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                    className="bg-dark border border-gray-800 rounded-xl p-8 hover:border-primary transition-all duration-300"
                >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <div className="w-6 h-6 text-primary">{icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-400">
                        {description}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutCard;