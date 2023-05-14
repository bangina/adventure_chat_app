import { TextS3 } from "@/assets/css/sharedStyles";
import { theme } from "@/assets/css/theme";
import { IC_HAMBERGER, IC_USER } from "@/data/constants/icons";
import createMotionVariants from "@/utils/createMotionVariants";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import TopNavBar from "../../../../components/organisms/layout/TopNavBar";
import InvertedIcon from '@/components/atoms/InvertedIcon';

interface RoomListNavBarProps {
  title: string;
}
export default function RoomListNavBar({ title }: RoomListNavBarProps) {
  const router = useRouter();
  const variants = createMotionVariants({
    duration: 0.5,
    initialDirection: "in",
  });

  return (
    <TopNavBar>
      <button css={{ width: 66, textAlign: "left" }}>
        <InvertedIcon src={IC_HAMBERGER} alt='toggle menu' width={24} height={24}/>
      </button>
      <TextS3 color={theme.colors.white}>{title}</TextS3>
      <motion.button key={router.route} css={{ width: 66, textAlign: "right" }} initial='initial' animate='in' exit='out' variants={variants}>        
        <InvertedIcon src={IC_USER} alt='my page' width={24} height={24}/>
      </motion.button>
    </TopNavBar>
  );
}
