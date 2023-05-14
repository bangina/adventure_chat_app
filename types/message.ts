export interface UserResponseType {
  id: number | string;
  name: string;
  avatar: string;
}

export const enum MessageTypeEnum {
  TEXT = "text",
  IMAGE = "image",
}
export interface MessageType {
  id: number | string;
  sender_id: string;
  sent_at: string;
  type: MessageTypeEnum;
  text?: string;
  image_url?: string;
}
export interface RoomResponseType {
  id: number | string;
  user: UserResponseType;
  messages: MessageType[];
  unread_count: number;
}
export interface DisplayMessageType extends MessageType {
  display_date?: string;
  display_time?: string;
}
