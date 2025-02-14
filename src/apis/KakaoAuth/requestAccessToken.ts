import axios from "axios";
import { BASE_URL } from "../../constants";

interface RequestAccessTokenResponse {
    accessToken: string;
    code: string;
}

export const requestAccessToken = async (code: string): Promise<RequestAccessTokenResponse> => {
    try {
        const response = await axios.post<RequestAccessTokenResponse>(
            `${BASE_URL}/kakao-authentication/request-access-token`,
            {
                code: code,
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};