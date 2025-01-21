// export default IntegrationDiagram; 
import React, { useState } from 'react';
import { Cloud, Server, Network, Code, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

// New Card Component for Mobile
const ToolCard = ({ Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm 
                border border-white/20 shadow-xl hover:shadow-2xl
                transition-all duration-300"
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full 
                     bg-gradient-to-r from-[#54d5d5] via-[#2e4fca] to-[#df264b]
                     text-white">
          <Icon size={32} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 pointer-events-none
                    bg-gradient-to-r from-[#54d5d5]/5 via-[#2e4fca]/5 to-[#df264b]/5">
      </div>
    </motion.div>
  );
};

// Original Components (unchanged)
const CircleNode = ({ x, y, title, description, Icon, isAnyHovered, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <g
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition-all duration-500"
      transform={`translate(${x}, ${y})`}
      style={{
        opacity: isAnyHovered ? (isHovered ? 1 : 0.7) : 1,
      }}
    >
      <circle
        r={isHovered ? "100" : "95"}
        className="transition-all duration-500 cursor-pointer"
        fill="white"
        stroke={isHovered ? "url(#circleGradient)" : "#2e4fca"}
        strokeWidth={isHovered ? "5" : "3"}
      />

      <g transform="translate(-25, -25)">
        {Icon && <Icon size={50} className={`transition-all duration-500 ${isHovered ? 'text-blue-800' : 'text-blue-600'}`} />}
      </g>

      <text
        className={`text-lg font-semibold transition-all duration-500 ${isHovered ? 'text-blue-800' : 'text-blue-600'}`}
        textAnchor="middle"
        y="55"
      >
        {title}
      </text>

      {isHovered && (
        <foreignObject
          x="-550"
          y="0"
          width="450"
          height="220"
          className="transition-opacity duration-500 z-50"
        >
          <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm 
                    border border-white/20 shadow-xl hover:shadow-2xl
                    transition-all duration-300 group">
            <div className="text-gray-600 text-lg">{description}</div>
            <div className="absolute inset-0 rounded-2xl opacity-100
                          transition-opacity duration-300 pointer-events-none
                          bg-gradient-to-r from-[#54d5d5]/5 via-[#2e4fca]/5 to-[#df264b]/5">
            </div>
          </div>
        </foreignObject>
      )}
    </g>
  );
};

const CenterLogo = ({ x, y, isAnyHovered }) => (
  <g
    transform={`translate(${x}, ${y})`}
    className="transition-all duration-500"
    style={{ opacity: isAnyHovered ? 1 : 1 }}
  >
    <circle cx="0" cy="0" r="150" className=" bg-[rgba(211, 217, 244, 1)]"
      style={
        {
          fill: "rgba(211, 217, 244, 1)"
        }
      }
    />
    <image
      href="./icon.svg"
      width="300"
      height="300"
      x="-150"
      y="-150"
      className="transition-all duration-500"
    />
  </g>
);

const getPointOnCircle = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};

const IntegrationDiagram = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const centerX = 1000;
  const centerY = 600;
  const nodeCount = 6;

  const baseRadius = 600;
  const radiusVariations = [
    baseRadius * 0.8,
    baseRadius * 0.7,
    baseRadius * 0.6,
    baseRadius * 0.7,
    baseRadius * 0.8,
    baseRadius * 1
  ];

  const angleVariations = [0, -25, -15, 25, 60];

  const nodes = [
    {
      title: "Cloud Solution",
      description: "Our cloud integration architects enable you to get more out of your data and connect the different parts of your organisation in a sustainable and efficient way in the Azure Cloud.",
      Icon: Cloud
    },
    {
      title: "API Development",
      description: "APIs are essential for securely sharing data within or outside an organization and can facilitate new business models. Proper API management is crucial for security and scalability.",
      Icon: Settings
    },
    {
      title: "Microservices",
      description: "The right architecture is crucial for the success, performance and maintenance of your IT environment. We help implement these architectures via Azure technology.",
      Icon: Code
    },
    {
      title: "Azure Integration",
      description: "Microsoft Azure is a collective name for dozens of apps and hubs that help drive your business forward. Our Azure experts support you in their specific implementation.",
      Icon: Network
    },
    {
      title: "BizTalk Integration",
      description: "Microsoft BizTalk Server is a powerful tool for business process management and enterprise application integration. We help with development and optimization of solutions.",
      Icon: Server
    }
  ].map((node, index) => {
    const baseAngle = (360 / nodeCount) * index;
    const angle = baseAngle + angleVariations[index];
    const radius = radiusVariations[index];
    const point = getPointOnCircle(centerX, centerY, radius, angle);
    return {
      ...node,
      x: point.x,
      y: point.y,
      angle: angle
    };
  });

  return (
    <div className="relative min-h-screen mt-50" id='Tools'>
      {/* Text content - Only visible on desktop */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2/4 p-8 z-10 hidden lg:block">
        <div className="backdrop-blur-3xl bg-white/60 p-10 rounded-3xl shadow-lg">
          <h2 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
            <b className="bg-gradient-to-r from-[#54d5d5] to-[#2e4fca] text-transparent bg-clip-text pb-3">
              Tools
            </b>{" "}
            for Craftsmanship
          </h2>
        </div>
      </div>

      {/* Desktop SVG */}
      <div className="absolute inset-0 z-20 hidden lg:block">
        <svg
          viewBox="340 0 1000 1200"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#54d5d5">
                <animate
                  attributeName="stop-color"
                  values="#54d5d5; #2e4fca; #df264b; #54d5d5"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#2e4fca">
                <animate
                  attributeName="stop-color"
                  values="#2e4fca; #df264b; #54d5d5; #2e4fca"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#df264b">
                <animate
                  attributeName="stop-color"
                  values="#df264b; #54d5d5; #2e4fca; #df264b"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          <g>
            {nodes.map((node, index) => (
              <line
                key={`line-${index}`}
                x1={centerX}
                y1={centerY}
                x2={node.x}
                y2={node.y}
                strokeWidth={hoveredNode === index ? "4" : "6"}
                className="transition-all duration-500"
                style={{
                  stroke: hoveredNode === index ? "url(#circleGradient)" : "#2e4fca",
                  opacity: hoveredNode !== null ? (hoveredNode === index ? 1 : 0.0) : 1
                }}
              />
            ))}
          </g>

          <CenterLogo x={centerX} y={centerY} isAnyHovered={hoveredNode !== null} />

          {nodes.map((node, index) => (
            <CircleNode
              key={index}
              {...node}
              isAnyHovered={hoveredNode !== null}
              onHover={(isHovered) => setHoveredNode(isHovered ? index : null)}
            />
          ))}
        </svg>
      </div>

      {/* Mobile/Tablet Cards */}
      <div className="lg:hidden relative z-20 px-4">
        {/* Mobile/Tablet Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
              <b className="bg-gradient-to-r from-[#54d5d5] to-[#2e4fca] text-transparent bg-clip-text pb-3">
                Tools
              </b>{" "}
              for Craftsmanship
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nodes.map((node, index) => (
            <ToolCard
              key={index}
              Icon={node.Icon}
              title={node.title}
              description={node.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default IntegrationDiagram;