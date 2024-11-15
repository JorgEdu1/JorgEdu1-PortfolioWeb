import { motion } from 'framer-motion'

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

const reverseIndex = (index) => {
  const totalSteps = 8
  return totalSteps - index - 1
}

const Stairs = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: 0.1 * reverseIndex(index),
            ease: 'easeInOut',
          }}
          className="relative h-full w-full bg-accent-hover"
        />
      ))}
    </>
  )
}

export default Stairs
