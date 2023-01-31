import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [userslist, setusersList] = useState([]);

  const addUserHandler = (uName, uAge, ucollege) => {
    setusersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge,college: ucollege, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <div>
        <h1>Lets get Started!!!</h1>
        <AddUser onAddUser={addUserHandler}></AddUser>
        <UsersList users={userslist}></UsersList>
      </div>
    </>
  );
}

export default App;
