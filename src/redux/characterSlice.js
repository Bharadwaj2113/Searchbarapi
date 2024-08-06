import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk for fetching character data
export const fetchCharacter = createAsyncThunk(
  'character/fetchCharacter',
  async (name) => {
    try {
      const response = await axios.get(`https://narutodb.xyz/api/character/search?name=${name}`);
      return response.data; // Assuming the API response contains character data
    } catch (error) {
      throw new Error('Character not found'); // Handle errors appropriately
    }
  }
);

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
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

export default characterSlice.reducer;
