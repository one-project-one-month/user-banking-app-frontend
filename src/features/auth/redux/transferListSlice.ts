import { createSlice } from "@reduxjs/toolkit"
import type { RecentTransferListOption } from "@/types/Transfer"
import type { RootState } from "@/app/store/store"
// import { fetchTransferLists } from "./transferApi"
import { dummyTransfers } from "@/services/transferLists.service";
interface TransferState {
  transferLists: RecentTransferListOption[];
  loading: boolean;
  error: string | null;
}

const initialState: TransferState = {
  transferLists: [],
  loading: false,
  error: null,
};


export const transferListSlice = createSlice({
  name : "transferLists",
  initialState,
  reducers : {
    loadDummyTransfers: (state) => {
      state.transferLists = dummyTransfers; //dummy
    },
  },

})
export const { loadDummyTransfers } = transferListSlice.actions; //dummy

export const getTransferLists = (state : RootState)=> state.transfer.transferLists

export default transferListSlice.reducer