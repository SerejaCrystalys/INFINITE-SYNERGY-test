import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./styles.css";

interface Props {
  selectedUser: number | null;
}

export const UserProfile = (props: Props) => {
  const users = useSelector((state: RootState) => state.users.list);

  const findUser = users[props.selectedUser!];

  if (!findUser) return <></>;
  return (
    <>
      <div className="profile_container">
        <input type="text" placeholder="name" defaultValue={findUser.name} />
        <div>
          <div>
            <img src="/img/user.svg" alt="user" />
            <div>
              <input
                type="text"
                placeholder="email"
                defaultValue={findUser.email}
              />
              <input
                type="number"
                placeholder="age"
                defaultValue={findUser.age}
              />
              <input type="text" placeholder="id" defaultValue={findUser.id} />
            </div>
          </div>
        </div>

        {JSON.stringify(findUser)}
      </div>
    </>
  );
};
