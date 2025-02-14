import axios from "axios";
import { BASE_URL } from "../../constants";

interface UserInfo {
    id: string;
    nickname: string;
    userToken: string;
}

export const requestUserInfo = async (userToken: string): Promise<UserInfo> => {
  try {
    const response = await axios.get<UserInfo>(`${BASE_URL}/profile/userinfo`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};