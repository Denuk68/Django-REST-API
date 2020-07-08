import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Component
import UserItem from "./UserItem/UserItem";

const UsersList = ({ UsersList, onDeleteItem , onEditItem}) => {
  const item = UsersList.map((item) => {
    // console.log("Item => ", item)
    return (
      <UserItem
        key={item.id}
        id={item.id}
        name={item.name}
        email={item.email}
        message={item.message}
        created_at={item.created_at}
        onDeleteItem={() => onDeleteItem(item.id)}
        onEditItem={() => onEditItem(item.id)}
      />
    );
  });
  return (
    <div className="outer-container">
      <h1>User manager table</h1>
      <Link to="/AddUser" 
            className="btn btn-link" >
        Add new user
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {item}
      </table>
    </div>
  );
};

export default UsersList;
