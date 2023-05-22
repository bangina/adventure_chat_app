import { theme } from "@/assets/css/theme";
import AvatarImg from "@/components/atoms/AvatarImg";
import Badge from "@/components/atoms/Badge";
import createMotionVariants from "@/utils/createMotionVariants";
import { motion } from "framer-motion";

import styled from "styled-components";

interface RoomPreviewCardProps {
  src: string;
  unread_count: number;
  user_name: string;
  last_message: string;
  time: string;
  onClick: () => void;
}
export default function RoomPreviewCard({ src, unread_count, user_name, last_message, time, onClick }: RoomPreviewCardProps) {
  const variants = createMotionVariants({
    duration: 0.2,
    initialDirection: "in",
  });

  return (
    <Container
      key={user_name}
     onClick={onClick} variants={variants} initial='initial' animate='in' exit='out'>
      <AvatarImg src={src} alt="user profile image" />
      <div css={{ paddingLeft: 15, flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        <div css={{ color: theme.colors.charcoalGrey, letterSpacing: -0.2, fontSize: 16, paddingBottom: 3 }}>{user_name}</div>
        <div css={{ color: theme.colors.coolGrey, fontSize: 13 }}>{last_message}</div>
      </div>
      <div css={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
        <div css={{ color: theme.colors.charcoalGreyTwo, fontSize: 11 }}>{time}</div>
        <Badge text={unread_count} />
      </div>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 9px;
`;
