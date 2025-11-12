import { errorToast } from "@/lib/helper/customToasts";
import { askQuestion } from "@/services/faq.service";
import { useMutation } from "@tanstack/react-query";

export const useAskQuestion = () => {
  return useMutation({
    mutationFn: (data: { question: string }) => askQuestion(data),
    onError: (error) => {
      errorToast("Failed", error.message);
    },
  });
};
