import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';


const QuoteBanner = () => {
    return (
        <div className="relative min-h-[300px] flex items-center justify-center  overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 z-0" />

            {/* Glass Panel Container */}
            <div

                className="relative w-full max-w-8xl mx-8 perspective-1000"
            >
                {/* Enhanced shadow layers for more pronounced depth */}
                <div className="absolute -inset-8 bg-black/20 rounded-3xl blur-3xl -z-10 transform scale-105" />
                <div className="absolute -inset-6 bg-black/15 rounded-3xl blur-2xl -z-20 transform scale-110" />
                <div className="absolute -inset-4 bg-black/10 rounded-3xl blur-xl -z-30 transform scale-115" />

                {/* Additional depth effects */}

                {/* Main glass panel with enhanced effects */}
                <div className="relative rounded-3xl overflow-hidden group transform transition-transform duration-700 hover:scale-[1.02]">
                    {/* Enhanced glass background layers */}
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/30" />
                    <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-r from-white/50 to-white/20" />
                    <div className="absolute inset-0 border-2 border-white/40 rounded-3xl" />

                    {/* Additional glass effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 opacity-50" />
                    <div className="absolute inset-0 bg-[rgba(211, 217, 244, 0.1)]" />

                    {/* Content container */}
                    <div className="relative w-full p-16 sm:p-20">
                        <div
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // transition={{ duration: 0.8, delay: 0.4 }}
                            // viewport={{ once: true }}
                            className="text-center"
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                                <span className="bg-gradient-to-r from-[#54d5d5] to-[#2e4fca] 
                                    text-transparent bg-clip-text">Integration </span>
                                brings people
                                together
                            </h1>
                        </div>
                    </div>

                    {/* Permanent gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#54d5d5]/10 via-[#2e4fca]/10 to-[#df264b]/10 
                        opacity-100 transition-opacity duration-700" />

                    {/* Enhanced edge highlights */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
                </div>

                {/* Additional floating effect shadows */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#54d5d5]/5 via-[#2e4fca]/5 to-[#df264b]/5 blur-2xl -z-40" />
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2e4fca] rounded-full blur-[150px] opacity-10" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#54d5d5] rounded-full blur-[150px] opacity-10" />
            </div>
        </div>
    );
};

export default QuoteBanner;

const TeamMemberCard = ({ image, name, role, quote, linkedin }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm 
                border border-white/20 shadow-xl hover:shadow-2xl
                transition-all duration-300 group h-full"
        >
            <div className="flex flex-col items-center text-center h-full">
                {/* Top content section */}
                <div className="flex-grow flex flex-col items-center">
                    <div className="relative w-36 h-36 mb-6">
                        {/* Gradient border ring */}
                        <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-r from-[#54d5d5] via-[#2e4fca] to-[#df264b]">
                            {/* Inner container with website gradient background */}
                            <div className="w-full h-full rounded-full overflow-hidden"
                                style={{
                                    background: 'linear-gradient(160deg, rgba(255, 255, 255, 1) 20%, rgba(235, 238, 250, 1) 30%, rgba(211, 217, 244, 1) 43%, rgba(214, 169, 199, 1) 74%, rgba(223, 38, 75, 1) 140%)'
                                }}>
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
                    <p className="text-gray-600 mb-4 h-6 max-w-[200px] mx-auto text-center">{role}</p>
                    <div className="text-gray-700 text-lg mb-6 italic">"{quote}"</div>
                </div>

                {/* Bottom section with LinkedIn - will stay at bottom */}
                <div className="mt-auto">
                    <div className="flex space-x-4">
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/10 backdrop-blur-sm 
                         border border-white/20 hover:border-[#2e4fca]/20
                         text-gray-600 hover:text-[#2e4fca] 
                         transition-colors duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 pointer-events-none
                    bg-gradient-to-r from-[#54d5d5]/5 via-[#2e4fca]/5 to-[#df264b]/5">
            </div>
        </motion.div>
    );
};

const Team = () => {
    const teamMembers = [
        {
            image: "./Iemen.png",
            name: "Iemen Uyttenhove",
            role: "Azure Consultant",
            quote: "Creating connections that matter",
            linkedin: "https://www.linkedin.com/in/iemenuyttenhove/"
        },
        {
            image: "./Falco.png",
            name: "Falco Lannoo",
            role: "Azure & Integration Consultant",

            quote: "Bringing Azure solutions to life",
            linkedin: "https://www.linkedin.com/in/falco-lannoo/"
        },
        {
            image: "./Dmitriy.png",
            name: "Dmitriy Kozlov",
            role: "Integration Consultant & Software Developer",

            quote: "Transforming challenges into solutions",
            linkedin: "https://www.linkedin.com/in/dmitriy-s-kozlov/"

        },
        {
            image: "./Brecht.png",
            name: "Brecht Tournoij",
            role: "Integration Consultant",
            quote: "Mastering enterprise integration",
            linkedin: "https://www.linkedin.com/in/brecht-tournoij-729b64256/"
        },
        {
            image: "./Lawrence.png",
            name: "Lawrence Verbruggen",
            role: "Integration Consultant",
            quote: "Bridging complexity with elegant solutions",
            linkedin: "https://www.linkedin.com/in/lawrenceverbruggen/"
        },
        {
            image: "./Nathan.png",
            name: "Nathan Moerman",
            role: "Managing partner/Integration Architect",
            quote: "Building bridges between systems and people",
            linkedin: "https://www.linkedin.com/in/nathan-moerman-88bab8b/"
        },
        {
            image: "./Robert.png",
            name: "Robert Maes",
            role: "Managing partner/Integration Architect",
            quote: "Making cloud integration seamless and efficient",
            linkedin: "https://www.linkedin.com/in/robert-maes-b82ab120/"
        },

    ];

    // Split the team members into two arrays
    const managingPartners = teamMembers.slice(0, 2);
    const consultants = teamMembers.slice(2);

    return (
        <div id='Team' className="relative py-20 overflow-hidden">
            {/* Background gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    // background: 'linear-gradient(160deg, rgba(255, 255, 255, 1) 20%, rgba(235, 238, 250, 1) 30%, rgba(211, 217, 244, 1) 43%, rgba(214, 169, 199, 1) 74%, rgba(223, 38, 75, 1) 140%)',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Meet {" "}
                            <b className="bg-gradient-to-r from-[#54d5d5] to-[#2e4fca] text-transparent bg-clip-text pb-3">
                                Our Team
                            </b>
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            The experts behind our integration solutions
                        </p>
                    </motion.div>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                    {teamMembers.slice(0, 5).map((member, index) => (
                        <TeamMemberCard
                            key={`member-${index}`}
                            {...member}
                        />
                    ))}
                </div>

                {/* Additional Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {teamMembers.slice(5).map((member, index) => (
                        <TeamMemberCard
                            key={`additional-${index}`}
                            {...member}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#2e4fca] rounded-full blur-[120px] opacity-5" />
                <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#54d5d5] rounded-full blur-[120px] opacity-5" />
            </div>
        </div>
    );
};

export { QuoteBanner, Team };
