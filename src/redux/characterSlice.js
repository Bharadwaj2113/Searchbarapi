import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharacterData } from './actions/characterActions';

// Create an async thunk for fetching character data
export const fetchCharacter = createAsyncThunk(
  'character/fetchCharacter',
  async (name) => {
    return await fetchCharacterData(name); // Use the imported function
  }
);

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    resetCharacterState: (state) => {
      state.character = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.character = action.payload; // Store the character object
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetCharacterState } = characterSlice.actions; // Export the reset action
export default characterSlice.reducer;
