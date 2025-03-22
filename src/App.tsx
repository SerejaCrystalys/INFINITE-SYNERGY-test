import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchUsers } from "./store/slice";
import { UsersList } from "./components/users_list/users_list";
import "./App.css";
import { Resize } from "./components/resize/resize";
import { UserProfile } from "./components/user_profile/profile";
function App() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className="app_container">
        <UsersList set={setSelectedUser} />
        <Resize />
        <UserProfile selectedUser={selectedUser} />
      </div>
    </>
  );
}

export default App;
