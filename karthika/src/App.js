import { useState } from "react";
//import { Child } from "./component/Child";
import { Spinner } from "./component/task2/Spinner";
import { UserList } from "./component/task2/UserList.jsx";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const usersList = [
    { id: 1, name: "Alice",age:24,email:"alice@gmail.com" },
    { id: 2, name: "Bob",age:25,email:"Bob@gmail.com" },
    { id: 3, name: "Charlie",age:26,email:"Charlie@gmail.com"},
    { id: 4, name: "David",age:27 ,email:"david@gmail.com"}
  ];

  const login = () => {
    setIsLoggedIn(true);
    setShowSpinner(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setShowSpinner(true);
  };
  return (
   <>
{/* <Child name="karthika" age="26"></Child>
<Child name="Pranav" age="6"></Child>
<Child name="Pranith" age="6"></Child>
<Child name="Anju" age="31"></Child>
<Child name="Deepika" age="32"></Child> */}
<h3>Task 2</h3>
<div>
      {
        isLoggedIn ?
          <button onClick={logout}>Logout</button>
          :
          <button onClick={login}>Login</button>
      }
      {
        showSpinner && <Spinner />
      }
      <UserList isLoggedIn={isLoggedIn} users={usersList} />
    </div>
   </>
  );
}

export default App;
