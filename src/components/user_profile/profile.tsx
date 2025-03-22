import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./styles.css";
import { useEffect, useState } from "react";
import { User } from "../../types";
import { updateUserByIndex } from "../../store/slice";

interface Props {
  selectedUser: number | null;
}

export const UserProfile = ({ selectedUser }: Props) => {
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();
  const findUser = users[selectedUser!];

  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (findUser) setUser(findUser);
  }, [findUser]);

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof User
  ) => {
    setUser({
      ...user!,
      [key]: e.currentTarget.value,
    });
  };
  const saveUser = () => {
    dispatch(updateUserByIndex({ index: selectedUser!, user: user! }));
  };

  if (!findUser || !user) return <></>;

  return (
    <div className="profile_container">
      <input
        className="user_name"
        type="text"
        placeholder="name"
        value={user!.name}
        onChange={(e) => changeUser(e, "name")}
      />
      <div className="profile_content">
        <div className="avatar_container">
          <img src="/img/user.svg" alt="user" className="avatar" />
        </div>
        <div className="user_info">
          <input
            type="text"
            placeholder="email"
            value={user!.email}
            onChange={(e) => changeUser(e, "email")}
          />
          <input
            type="number"
            placeholder="age"
            value={user!.age}
            onChange={(e) => changeUser(e, "age")}
          />
          <input
            type="text"
            placeholder="id"
            value={user!.id}
            onChange={(e) => changeUser(e, "id")}
          />
        </div>
      </div>
      <button className="save" onClick={saveUser}>
        save
      </button>
    </div>
  );
};
