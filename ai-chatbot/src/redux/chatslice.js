import { createSlice } from '@reduxjs/toolkit'

const initialstate = {
    messages : [] ,
    loading : false,
    errors : null
    
};

export  const chatslice = createSlice({
      name: "chat",
    initialstate,

    reducers: {
        addMessages : (state,action) => {
            state.messages.push(action.payload);
        },
        setLoading : (state,action) => {
            state.loading = action.payload;

        },
        setError : (state,action) => {
            state.error = action.payload;
        },
        clearchat : (state) => {
            state.messages = [];
            state.error = null;
        }

    }
}
  
) ;
export const {
  addMessage,
  setLoading,
  setError,
  clearChat,
} = chatslice.actions;

export default chatslice.reducer;