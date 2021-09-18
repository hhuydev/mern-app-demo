import React from "react";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  if (props.items.length === 0)
    return <p className={classes.centered}>No data</p>;

  return (
    <ul className={classes["users-list"]}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};
export default UsersList;
