import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { User } from "../../types";
import "./styles.css";
import { useEffect, useCallback, useRef } from "react";
import { fetchUsers } from "../../store/slice";

interface Props {
  set: (id: number) => void;
}

export const UsersList = ({ set }: Props) => {
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();
  const lastElementRef = useRef<HTMLLIElement | null>(null);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          dispatch(fetchUsers());
        }, 500);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const currentLastElement = lastElementRef.current;
    if (currentLastElement) {
      observer.observe(currentLastElement);
    }

    return () => {
      if (currentLastElement) {
        observer.unobserve(currentLastElement);
      }
    };
  }, [observerCallback, users]);

  return (
    <ul className="user_list">
      {users.map((item: User, index) => (
        <li
          className="user_item"
          ref={index === users.length - 1 ? lastElementRef : null}
          key={index}
          onClick={() => {
            console.log(index);
            set(index);
          }}
        >
          <img src="/img/user.svg" alt="user" />
          <div>{item.name}</div>
        </li>
      ))}
    </ul>
  );
};
