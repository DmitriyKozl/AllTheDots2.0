/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
}

const Navigation: React.FC<NavbarProps> = ({
  logo = <img className='max-w-40' src='./logo.svg'></img>,
  navItems = [
    { label: "Services", href: "#Services" },
    { label: "Tools", href: "#Tools" },
    { label: "Team", href: "#Team" },
    { label: "Contact", href: "#Contact" },
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Glass background */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/10 rounded-lg 
                            transform scale-105 -z-10  shadow-sm"></div> 
                            

      {/* Main navigation content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800 hover:text-primary-blue
                           transition-colors duration-300 cursor-pointer
                           relative group">
              {logo}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                             from-primary-blue to-primary-red group-hover:w-full 
                             transition-all duration-300"></span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-gray-900 transition-colors duration-300
                         group py-2"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                               from-primary-blue to-primary-red group-hover:w-full 
                               transition-all duration-300"></span>
              </a>
            ))}

            {/* CTA Button with glass effect */}
            <button className="px-4 py-2 rounded-md relative group
                             overflow-hidden ">
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-md group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 to-primary-red/10 
                             rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {isMenuOpen ? (
                <X size={24} className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
              ) : (
                <Menu size={24} className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full backdrop-blur-md bg-white/30 shadow-lg
                   transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 rounded-md
                       relative group overflow-hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              {/* Hover background */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 to-primary-red/10 
                             transform -translate-x-full group-hover:translate-x-0 transition-transform 
                             duration-300"></span>
              <span className="relative">{item.label}</span>
            </a>
          ))}

          {/* Mobile CTA Button */}
          <button
            className="w-full text-left px-3 py-2 rounded-md relative group overflow-hidden
                       text-white mt-2"
            onClick={() => setIsMenuOpen(true)}
          >
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;