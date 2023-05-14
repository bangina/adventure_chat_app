import createMotionVariants from "@/utils/createMotionVariants";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";

interface AvatarImgProps {
  src: string;
  alt: string;
}
export default function AvatarImg({ src, alt }: AvatarImgProps) {
  const router = useRouter();
  const variants = createMotionVariants({
    duration: 0.1,
    initialDirection: "in",
    delay: 0.2,
  });
  return (
    <RoundContainer key={router.route} variants={variants} initial='initial' animate='in' exit='out'>
      <ImgBG src={src}/>
    </RoundContainer>
  );
}

const ImgBG = styled.div<{src: string}>`
  background-image: url(${(props) => props.src});
  width: 56px;
  height: 56px;
  background-size: cover;
  background-position: center;
`

const RoundContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  overflow: hidden;
`;
