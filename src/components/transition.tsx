import { motion } from "framer-motion";

interface TransitionProps {
  OgComponent: React.ComponentType;
}

const Transition: React.FC<TransitionProps> = ({ OgComponent }) => {
  return (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 0.5 , 0.36, 0.5] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.5, 0.36, 0.5] }}
      />
    </>
  );
};

export default Transition;
