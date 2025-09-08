import React from 'react';
import { motion } from 'framer-motion';

// Generic pressable wrapper for micro-interactions.
const Pressable = React.forwardRef(({ as: Component = 'button', children, whileTap = { scale: 0.96, y: 1 }, whileHover = { scale: 1.02 }, transition = { type: 'spring', stiffness: 500, damping: 30, mass: 0.4 }, ...rest }, ref) => {
  const MotionTag = motion(Component);
  return (
    <MotionTag
      ref={ref}
      whileTap={whileTap}
      whileHover={whileHover}
      transition={transition}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export default Pressable;
