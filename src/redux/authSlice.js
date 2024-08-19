import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
  ],
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        state.currentUser = user;
        state.error = null;
      } else {
        state.error = 'Invalid username or password';
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
    register: (state, action) => {
      const { username, password } = action.payload;
      const userExists = state.users.find((u) => u.username === username);
      if (!userExists) {
        state.users.push({ username, password });
        // Do not auto-login; user will log in manually
        state.error = null;
      } else {
        state.error = 'Username already exists';
      }
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
