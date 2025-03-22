import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchUsers } from "./store/slice";
import { UsersList } from "./components/users_list/users";
import "./App.css";
import { Resize } from "./components/resize/resize";
import { UserProfile } from "./components/user_profile/profile";
function App() {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

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
