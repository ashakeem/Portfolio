import { motion } from 'framer-motion';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary gradient */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -inset-[10%] opacity-15"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
          <div className="absolute inset-0 bg-gradient-conic from-[#ff3b3b]/30 via-[#ff7676]/30 to-[#ff9292]/30 rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Secondary floating gradients */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff3b3b]/10 rounded-full blur-3xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/98 to-black backdrop-blur-[30px]" />
    </div>
  );
};

export default GradientBackground; 