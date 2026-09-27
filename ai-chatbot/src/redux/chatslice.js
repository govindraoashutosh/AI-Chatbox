import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGeminiResponse } from "../services/geminiApi";

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message, { rejectWithValue }) => {
    try {
      const aiResponse = await getGeminiResponse(message);

      return {
        userMessage: message,
        aiMessage: aiResponse,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    clearChat: (state) => {
      state.messages = [];
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;

        state.messages.push({
          role: "user",
          text: action.payload.userMessage,
        });

        state.messages.push({
          role: "ai",
          text: action.payload.aiMessage,
        });
      })

      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearChat } = chatSlice.actions;

export default chatSlice.reducer;