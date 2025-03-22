import { createSlice } from "@reduxjs/toolkit";
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
  },
});

export const { fetchUsers } = usersSlice.actions;
export default usersSlice.reducer;
