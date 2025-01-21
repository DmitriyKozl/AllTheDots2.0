import { motion } from 'framer-motion';

const GradientCircle = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="h-screen relative flex items-center justify-center"
        style={{
          aspectRatio: '1 / 1', position: 'absolute', bottom: '0', right: '0', width: '50%'
        }}
      >
        <svg className="h-full w-auto" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="12"
            stroke="url(#gradient)"
            className="rounded-full"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#54d5d5' }} />
              <stop offset="50%" style={{ stopColor: '#2e4fca' }} />
              <stop offset="100%" style={{ stopColor: '#df264b' }} />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default GradientCircle;