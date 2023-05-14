import { Variants } from "framer-motion";

type VariantDirection = "in" | "out";

interface CustomVariants extends Variants {
  initial: { x: number; opacity: number };
  in: { x: number; opacity: number; transition: { duration: number; delay?: number; staggerChildren?: number } };
  out: { x: number; opacity: number; transition: { duration: number; delay?: number; staggerChildren?: number } };
}

function createMotionVariants({ duration, delay, initialDirection }: { duration: number; delay?: number; initialDirection: VariantDirection }): CustomVariants {
  const initialX = initialDirection === "in" ? -10 : 10;

  return {
    initial: { x: initialX, opacity: 0 },
    in: { x: 0, opacity: 1, transition: { duration, delay, staggerChildren: 0.2 } },
    out: { x: 0, opacity: 1, transition: { duration, delay, staggerChildren: 0.2 } },
  };
}

export default createMotionVariants;
