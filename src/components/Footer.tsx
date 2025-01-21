import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"

      />
      <div className="absolute inset-0 backdrop-blur-lg bg-white/10 rounded-lg 
                            transform scale-105 -z-10  shadow-sm"></div>
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4"><img className='max-w-40' src='./logo.svg'></img></h2>
                <p className="text-gray-600 mb-6">
                  Connecting Lifelines of organizations
                </p>

              </motion.div>
            </div>


          </div>
        </div>

        {/* Copyright */}
        <div className="relative">
          <div className="border-t border-gray-200/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-gray-600">
                © {currentYear} All The Dots. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#2e4fca] rounded-full blur-[120px] opacity-5"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-[#54d5d5] rounded-full blur-[120px] opacity-5"></div>
      </div>
    </footer>
  );
};

export default Footer;