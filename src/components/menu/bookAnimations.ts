
export const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.95,
    transformOrigin: direction > 0 ? "left center" : "right center",
    z: -200
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
    z: 0
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.95,
    transformOrigin: direction > 0 ? "right center" : "left center",
    z: -200
  })
};

export const bookVariants = {
  idle: {
    scale: 1,
    rotateX: 0,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },
  flipping: {
    scale: 1.02,
    rotateX: -1,
    boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.35)"
  }
};
