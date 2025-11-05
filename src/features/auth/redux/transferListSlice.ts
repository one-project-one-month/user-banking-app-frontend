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
  // extraReducers : builder =>{
  //   builder
  //   .addCase(fetchTransferLists.pending,(state)=>{
  //     state.loading = true
  //   })
  //   .addCase(fetchTransferLists.fulfilled,(state,action)=>{
  //     state.loading = false
  //     state.transferLists = action.payload
  //   })
  //   .addCase(fetchTransferLists.rejected,(state,action)=>{
  //     state.loading = false
  //     state.error = action.error.message || "Failed to fetch transfer lists"
  //   })
  // }
})
export const { loadDummyTransfers } = transferListSlice.actions; //dummy

export const getTransferLists = (state : RootState)=> state.transfer.transferLists

export default transferListSlice.reducer