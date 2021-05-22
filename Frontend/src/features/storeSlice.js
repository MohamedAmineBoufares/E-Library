import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setStore: (state, action) => {
      state.itemNum = action.payload.itemNum;
      state.itemFav = action.payload.chat;
    },
  },
});

export const { setChat } = chatSlice.actions;

export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;

export default chatSlice.reducer;