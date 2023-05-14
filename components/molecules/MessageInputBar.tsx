import styled from "styled-components";
import { IC_IMG_SEND, LOADING_SPINNER } from "@/data/constants/icons";
import InvertedIcon from '../atoms/InvertedIcon';

export default function MessageInputBar({ value, onSubmit, onChange, loading }) {
  return (
    <MessageInputWrapper onSubmit={onSubmit}>
      <MessageInput onChange={onChange} value={value} />
      <MessageInputButton type='button' onClick={onSubmit}>
        {loading ? <img src={LOADING_SPINNER} width={20} height={20} alt='send button' /> : <InvertedIcon src={IC_IMG_SEND} width={20} alt='send button' />
        }
      </MessageInputButton>
    </MessageInputWrapper>
  );
}

const MessageInputWrapper = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 16px 20px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.paleGrey};
`;

const MessageInput = styled.input`
  width: 100%;
  appearance: none;
  padding: 17px 146px 16px 16px;
  border-radius: 25px;
  box-shadow: 0 2px 4px 0 ${(props) => props.theme.colors.black10};
  background-color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.12px;
  color: ${(props) => props.theme.colors.black};
  placeholder: ${(props) => props.theme.colors.battleshipGrey};
  border: none;
  :focus {
    outline: none;
  }
`;

const MessageInputButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  appearance: none;
  border: none;
  flex-shrink: 0;
`;
