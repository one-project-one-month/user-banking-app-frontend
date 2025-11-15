import API from "@/app/api/axios";
import { throwError } from "@/lib/helper/common";

export const askQuestion = async (data: { question: string }) => {
  try {
    const response = await API.post("api/faqs/ask", data);
    return response.data;
  } catch (error) {
    throwError(error);
  }
};
