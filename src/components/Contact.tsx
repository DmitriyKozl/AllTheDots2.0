import React from 'react';
import { motion } from 'framer-motion';
import {  Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link?: string;
}

const Contact = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["Nathan.Moerman@allthedots.be"],
      link: "mailto:Nathan.Moerman@allthedots.be"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+32 496 05 97 37"],
      link: "tel:+32496059737"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit us",
      details: ["Lucky Lukestraat 6, 8500 Kortrijk"]
    }
  ];

  return (
    <div id="Contact" className="relative min-h-screen py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm 
                        border border-white/20 shadow-xl hover:shadow-2xl
                        transition-all duration-300 group text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full 
                             bg-gradient-to-r from-[#54d5d5] via-[#2e4fca] to-[#df264b]
                             text-white">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
              {info.details.map((detail, idx) => (
                info.link ? (
                  <a
                    key={idx}
                    href={info.link}
                    className="text-gray-600 hover:text-[#2e4fca] transition-colors duration-300
                             relative group inline-block"
                  >
                    {detail}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2e4fca] 
                                   group-hover:w-full transition-all duration-300"></span>
                  </a>
                ) : (
                  <p key={idx} className="text-gray-600">{detail}</p>
                )
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg 
                    bg-gray-800/10 border-gray-700/20
                    border backdrop-blur-sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.892497053987!2d3.2583520756574695!3d50.8308257175713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33bc98ab76be7%3A0xa7d39bb2b71756bc!2sDe%20Kade!5e0!3m2!1sen!2sbe!4v1737364613165!5m2!1sen!2sbe"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[450px]"
          />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#2e4fca] rounded-full blur-[120px] opacity-5"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#54d5d5] rounded-full blur-[120px] opacity-5"></div>
      </div>
    </div>
  );
};

export default Contact;
