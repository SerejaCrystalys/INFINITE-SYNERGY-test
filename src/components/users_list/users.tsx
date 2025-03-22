import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { User } from "../../types";

import "./styles.css";
import { useEffect, useCallback } from "react";
import { fetchUsers } from "../../store/slice";

interface Props {
  set: (id: number) => void;
}

export const UsersList = ({ set }: Props) => {
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        dispatch(fetchUsers());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    const element = document.getElementById("last");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [observerCallback, users]);

  return (
    <div className="user_list">
      {users.map((item: User, index) => (
        <div
          className="user_item"
          id={index === users.length - 1 ? "last" : ""}
          key={index}
          onClick={() => {
            console.log(index);
            set(index);
          }}
        >
          <img src="/img/user.svg" alt="user" />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};
