import { User } from "@models/user/User";
import axios from "axios";
import { BASE_URL } from "../env";

export const getUserResponse = async ({
  url,
  token,
}: {
  url: string;
  token: string | null;
}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data as User;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
