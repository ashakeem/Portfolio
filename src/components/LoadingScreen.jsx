import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'unset'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative w-24 h-24"
      >
        <div className="absolute inset-0 border-4 border-primary rounded-full opacity-20" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-primary">A</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 