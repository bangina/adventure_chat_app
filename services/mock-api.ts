// MOCK API Route
// users/:id
// rooms/:id
// users

import { RoomModel } from "@/services/models/message";
import { UserModel } from "@/services/models/user";

// rooms
const returnAPIResponse = (url, id?) => {
  if (url?.includes("users")) {
    if (id) {
      return UserModel?.filter((item) => {
        return item.id == id;
      })[0];
    }
    return UserModel;
  }
  
  if (url.includes("rooms"))
    if (id) {
      return RoomModel?.filter((item) => {
        return item.id == id;
      })[0];
    }
  return RoomModel;
};
export default returnAPIResponse;
