import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateUsers } from "./features/mock";
import { User } from "../types";

interface UsersState {
  list: User[];
}

const initialState: UsersState = {
  list: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state) => {
      const fetched = generateUsers(20);
      state.list = state.list.concat(fetched);
    },

    updateUserByIndex: (
      state,
      action: PayloadAction<{ index: number; user: User }>
    ) => {
      const { index, user } = action.payload;
      if (index >= 0 && index < state.list.length) {
        state.list[index] = user;
      }
    },
  },
});

export const { fetchUsers, updateUserByIndex } = usersSlice.actions;

export default usersSlice.reducer;
