import { DisplayMessageType, MessageType } from "@/types/message";
import { formatHHMM } from "@/utils/formatHHMM";
import { atom, selector } from "recoil";

export const messageListState = atom<null | DisplayMessageType[]>({
  key: "messageListState",
  default: [],
});

export const mutatedMessageList = selector({
  key: "mutatedMessageList",
  get: ({ get }) => {
    const mutatedList = appendDisplayInfo([...get(messageListState)]);
    return mutatedList;
  },
  set: ({ set, get }) => set(messageListState, appendDisplayInfo(get(messageListState))),
});

/**
 * 메시지 리스트를 받아서, display_date, display_time을 추가한 새로운 리스트를 반환합니다.
 * @param messages
 * @returns DisplayMessageType[]
 */
const appendDisplayInfo = (messages: MessageType[]): DisplayMessageType[] => {
  let previousDate: Date | null = null;
  let previousUserId: string | null = null;
  return messages?.map((message) => {
    const currentDate = new Date(message.sent_at);
    const displayDate = !previousDate || currentDate.toDateString() !== previousDate.toDateString();

    const displayTime =
      !previousDate ||
      currentDate.getMinutes() !== previousDate.getMinutes() || // min 다르면 무조건 display
      currentDate.getTime() - previousDate.getTime() > 60 * 1000 || // min 같고, diff > 60초면 display(시간이 다른거니까)
      !previousUserId ||
      message.sender_id !== previousUserId; // user 다르면 display

    const displayMessage: DisplayMessageType = {
      ...message,
      display_date: displayDate ? currentDate.toLocaleDateString() : undefined,
      display_time: displayTime ? formatHHMM(currentDate) : undefined,
    };

    previousDate = currentDate;
    previousUserId = message.sender_id;

    return displayMessage;
  });
};
