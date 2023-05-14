import MessageBubbleText from "@/components/molecules/MessageBubbleText";
import { DisplayMessageType, MessageTypeEnum } from "@/types/message";
import createMotionVariants from "@/utils/createMotionVariants";
import useScrollMessageBubble from "feature/hooks/pages/room_id/useScrollMessageBubble";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import DateDivider from "../../../../components/molecules/DateDivider";
import MessageBubbleImg from "../../../../components/molecules/MessageBubbleImg";

interface MessageBubbleProps {
  message: DisplayMessageType;
}
export default function MessageBubble({ message: { sender_id, display_date, display_time, text, type, image_url } }: MessageBubbleProps) {
  const { msgBubbleContainerRef } = useScrollMessageBubble();
  const isMine = sender_id === "finn";
  const variants = createMotionVariants({
    duration: 0.2,
    initialDirection: "out",
    delay: isMine ? 0.3 : 0.2,
  });
  const router = useRouter();

  return (
    <>
      {display_date && <DateDivider display_date={display_date} />}
      <MessageBubbleWrapper isMine={isMine} ref={msgBubbleContainerRef} variants={variants} key={router.route} initial='initial' animate='out' exit='in'>
        {isMine && <Time>{display_time}</Time>}
        {type === MessageTypeEnum.TEXT && <MessageBubbleText isMine={isMine} text={text} />}
        {type === MessageTypeEnum.IMAGE && <MessageBubbleImg image_url={image_url} />}
        {isMine || <Time>{display_time}</Time>}
      </MessageBubbleWrapper>
    </>
  );
}

const MessageBubbleWrapper = styled(motion.div)<{ isMine?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  align-items: flex-end;
  gap: 4px;
  margin-bottom: 10px;
  scroll-margin: 50px;
`;

const Time = styled.time`
  opacity: 0.4;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.charcoalGreyTwo};
  width: 32px;
`;
