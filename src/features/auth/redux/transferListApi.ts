import API from "@/app/api/axios";
import type { RecentTransferListOption } from "@/types/Transfer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTransferLists = createAsyncThunk<
  RecentTransferListOption[],
  void
>("transfer/fetchTransferLists", async () => {
  const response = await API.get("/users/recent-transfer-list");
  return response.data.recentTransferListOptions;
});