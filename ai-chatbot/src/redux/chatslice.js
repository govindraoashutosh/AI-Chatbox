import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages : [] ,
    loading : false,
    error : null
    
};

export  const chatslice = createSlice({
      name: "chat",
    initialState,

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
  addMessages,
  setLoading,
  setError,
  clearchat,
} = chatslice.actions;

export default chatslice.reducer;