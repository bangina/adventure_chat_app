import styled from "styled-components";
interface MessageBubbleTextProps {
  isMine?: boolean;
  text: string;
}

function MessageBubbleText({ isMine, text }: MessageBubbleTextProps) {
  return (
    <MessageBubble isMine={isMine}>
      <Text isMine={isMine}>{text}</Text>
    </MessageBubble>
  );
}

const MessageBubble = styled.div<{ isMine?: boolean }>`
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 ${(props) => (props.isMine ? props.theme.colors.primary : props.theme.colors.black10)};
  background-color: ${(props) => (props.isMine ? props.theme.colors.primary : props.theme.colors.white)};
`;
const Text = styled.p<{ isMine?: boolean }>`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.1px;
  text-align: right;
  color: ${(props) => (props.isMine ? props.theme.colors.white : props.theme.colors.charcoalGreyTwo)};
`;

export default MessageBubbleText;
