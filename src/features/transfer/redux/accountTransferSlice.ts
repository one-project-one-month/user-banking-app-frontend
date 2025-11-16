import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toAccount: '',
  fullname: '',
  selectedNickname : null,
  amount : '',
  note: '',
  toAccountId: null,
  pin : ''
};

const accountTransferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    setToAccount: (state, action) => {
      state.toAccount = action.payload;
    },
    setFullname: (state, action) => {
      state.fullname = action.payload;
    },
    setSelectedNickname: (state, action) => {
      state.selectedNickname = action.payload;
    },
    setAmount : (state,action)=>{
      state.amount  = action.payload
    },
    setNote : (state,action)=>{
      state.note = action.payload
    },
    setToAccountId: (state, action) => {
      state.toAccountId = action.payload;
    },
    setPin :(state,action)=>{
      state.pin = action.payload
    },
    resetTransfer: () => initialState,
  },
});

export const { setToAccount, setFullname, resetTransfer,setToAccountId,setSelectedNickname,setNote,setAmount,setPin } = accountTransferSlice.actions;
export default accountTransferSlice.reducer;