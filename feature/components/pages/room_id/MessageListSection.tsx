import { DisplayMessageType, MessageType, MessageTypeEnum } from "@/types/message";
import { axiosPost } from "libs/axiosHelper";
import useRecoilMessageList from "libs/recoil_atoms/messageList/useRecoilMessageList";
import { memo, useId, useState } from "react";
import styled from "styled-components";
import MessageInputBar from "../../../../components/molecules/MessageInputBar";
import MessageBubble from "./MessageBubble";

function MessageListSection() {
  const { updateMessage, messageList } = useRecoilMessageList();

  const [inputText, setInputText] = useState<string>("");
  const [sendMessageLoading, setSendMessageLoading] = useState<boolean>(false);
  const randomId = useId();

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sendMessageLoading || !inputText) return;

    setSendMessageLoading(true);
    const messageDataObj = {
      success: true,
      data: {
        id: randomId,
        sender_id: "finn",
        text: inputText,
        sent_at: new Date().toISOString(),
        type: MessageTypeEnum.TEXT,
      },
    };
    
    updateMessage((prevMessageList) => [...prevMessageList, { ...messageDataObj.data }]);
    postNewMessageToServer(messageDataObj).then((response) => {
      setSendMessageLoading(false);
      setInputText("");

      // if success -> do nothing (optimistic update)
      if (response.success) return;

      // if fail -> revert state
      alert("메시지 전송에 실패했습니다.");
      const newMessageList = messageList.filter((message) => message.id !== randomId);
      updateMessage([...newMessageList]);
    });
  };
  const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  type messageResponse = {
    success: boolean;
    data: MessageType;
  };
  const postNewMessageToServer = async (messageObj): Promise<messageResponse> => {
    const data: messageResponse = await axiosPost(messageObj);
    return data;
  };

  return (
    <Container>
      <MessageSection>
        <MessageBubbleList list={messageList} />
        <MessageInputBar value={inputText} onChange={handleChangeInputText} onSubmit={handleSendMessage} loading={sendMessageLoading} />
      </MessageSection>
    </Container>
  );
}

export default MessageListSection;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleGrey};
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: -1;
`;

const MessageSection = styled.div`
  padding: 80px 20px;
  overflow-y: scroll;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MessageBubbleList = memo(({ list }: { list: DisplayMessageType[] }) => {
  return (
    <section>
      {list?.map((messageItem) => (
        <MessageBubble message={messageItem} key={`${messageItem.id} + "message_item" + ${messageItem.sent_at}`} />
      ))}
    </section>
  );
});
