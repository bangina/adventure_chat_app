import { UserResponseType } from "@/types/message";
import { axiosGet } from "@/libs/axiosHelper";

/**
 * @desctiption
 * API call functions for user
 */

export const getUserDetail = async (id: number | string): Promise<UserResponseType> => await axiosGet("users", id);
