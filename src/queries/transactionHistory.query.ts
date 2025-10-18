import { getTransactions } from "@/services/transactionHistory.service";
import { useQuery } from "@tanstack/react-query";

export const useGetTransactions = () => {
  return useQuery({
    queryKey: ["transaction"],
    queryFn: () => getTransactions({type:"both"}),
  });
};