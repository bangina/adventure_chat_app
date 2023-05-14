import { useRecoilValue, useSetRecoilState } from "recoil";
import { messageListState, mutatedMessageList } from ".";

const useRecoilMessageList = () => ({
  messageList: useRecoilValue(mutatedMessageList),
  updateMessage: useSetRecoilState(messageListState),
});
export default useRecoilMessageList;
