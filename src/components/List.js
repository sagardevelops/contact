import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const List = () => {
  const list = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Password</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((listItem, index) => {
          return (
            <tr key={index}>
              <td>{listItem.firstName}</td>
              <td>{listItem.lastName}</td>
              <td>{listItem.phone}</td>
              <td>{listItem.email}</td>
              <td>{listItem.password}</td>
              <td>
                <Link className="edit-btn" to={`/${index}`}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                &nbsp;&nbsp;
                <button
                  onClick={() => deleteUser(index)}
                  className="delete-btn"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
