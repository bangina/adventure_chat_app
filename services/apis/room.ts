import { RoomResponseType } from "@/types/message";
import { axiosGet } from "@/libs/axiosHelper";

/**
 *
 * @desctiption
 * API call functions for message room
 */

export const getRoomDetail = async (id: string): Promise<RoomResponseType> => await axiosGet("rooms", id);
export const getRoomList = async (): Promise<RoomResponseType[]> => await axiosGet("rooms");
