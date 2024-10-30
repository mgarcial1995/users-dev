import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/createUserType';
  
  // Estado inicial del slice de tareas
  interface UserState {
    items: User[];
  }
  
  const initialState: UserState = {
    items: [],
  };

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.items = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.items.push(action.payload);
    },
  },
});

export const { setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;
