import React from 'react';
import { Activity, Code, Search, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

import IntegrationDiagram from './Tools';
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="w-full py-20"
    >
      <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm 
                    border border-white/20 shadow-xl hover:shadow-2xl
                    transition-all duration-900 group">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full 
                       bg-gradient-to-r from-[#54d5d5] via-[#2e4fca] to-[#df264b]
                       text-white text-2xl">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 pointer-events-none
                      bg-gradient-to-r from-[#54d5d5]/5 via-[#2e4fca]/5 to-[#df264b]/5"></div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [


    {
      icon: <Settings className="w-6 h-6" />,
      title: "Architecture",
      description: "Designing robust integration solutions tailored to client needs."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Analysis",
      description: "Conducting in-depth assessment of existing systems, processes, triggers, messages, and security mechanisms."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Implementation",
      description: "Executing integrations with a focus on quality and scalability."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Follow-up",
      description: "Monitoring, maintaining, and optimizing integrations to ensure sustained performance."
    }
  ];

  return (
    <div id="Services" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background gradient starting from top right */}
      <div
        className="absolute inset-0 z-0"

      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
              <b className=" bg-gradient-to-r from-[#54d5d5] to-[#2e4fca] 
                             text-transparent bg-clip-text pb-3">Excellence</b> through passion
            </h2>

            <p className="mt-4 text-xl text-gray-600">
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        <IntegrationDiagram></IntegrationDiagram>

      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-[#2e4fca]/30 blur-sm"
        animate={{
          x: ["-10vw", "10vw"],
          y: ["-10vh", "10vh"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ top: '20%', left: '20%' }}
      />
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-[#df264b]/30 blur-sm"
        animate={{
          x: ["10vw", "-10vw"],
          y: ["10vh", "-10vh"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ bottom: '20%', right: '20%' }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#2e4fca] rounded-full blur-[120px] opacity-5"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#54d5d5] rounded-full blur-[120px] opacity-5"></div>
      </div>

    </div>

  );
};

export default Features;