//import { useEffect, useState } from "react";
//import { UserForm } from "./component/task4/Form";
//import { Message } from "./component/task3/Message";
//import { Post } from "./component/task3/Post";
//import { Child } from "./component/Child";
//import { Spinner } from "./component/task2/Spinner";
//import { UserList } from "./component/task2/UserList.jsx";
//import {AdminList} from "./component/task2/AdminList";
//import {useTimer} from "./component/hooks/timer"
import Header from './component/task6/header/Header';
import Routing from './component/task6/routing/routing';

function App() {

 // const {start,clear, seconds}= useTimer();

// const [data,setData]= useState();
// const [showMessage, setShowMessage] = useState(false);
// useEffect(()=>{
//   const fetchData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const responseData = await res.json();
//     setData(responseData);
//     setShowMessage(true);
// };
// fetchData();
// },[]);
  // const [isLoggedAdmin, setIsLoggedAdmin] = useState(false);
  // const [isLoggedUser, setIsLoggedUser] = useState(true);
  // const usersList = [
  //   { id: 1, name: "Alice",age:24,email:"alice@gmail.com" },
  //   { id: 2, name: "Bob",age:25,email:"Bob@gmail.com" },
  //   { id: 3, name: "Charlie",age:26,email:"Charlie@gmail.com"},
  //   { id: 4, name: "David",age:27 ,email:"david@gmail.com"}
  // ];

  // const adminList = [
  //   { id: 5, name: "karthika",age:24,email:"karthika@gmail.com" },
  //   { id: 6, name: "pranav",age:25,email:"pranav@gmail.com" },
  //   { id: 7, name: "pranith",age:26,email:"pranith@gmail.com"},
  //   { id: 8, name: "anju",age:27 ,email:"anju@gmail.com"}
  // ];

  // const loguser = () => {
  //   console.log("user is clicked");
  //   setIsLoggedAdmin(true);
  //   setIsLoggedUser(false);
  // };

  // const logadmin = () => {
  //   console.log("admin is clicked");
  //   setIsLoggedAdmin(false);
  //   setIsLoggedUser(true);
  // };
  return (
    <div className="app">
{/* <Child name="karthika" age="26"></Child>
<Child name="Pranav" age="6"></Child>
<Child name="Pranith" age="6"></Child>
<Child name="Anju" age="31"></Child>
<Child name="Deepika" age="32"></Child> */}

{/* <h3>Task 2</h3>
<div>


      {
        isLoggedAdmin ?
        <>
          <button onClick={logadmin}>Admin</button>
          <AdminList isLoggedAdmin={isLoggedAdmin}  Admin={adminList} />
          </>
          :
          <>
          <button onClick={loguser}>User</button>
          <UserList isLoggedUser={isLoggedUser} users={usersList} />
          </>
      }
    </div> */}
    {/* <h3>Task-3 using UseEffect and API intergration</h3>
<Post list={data}/>
<Message value={showMessage}/> */}
{/* <h4>Task 4</h4>
<UserForm/> */}
{/* <h5>Task 5</h5>
<p>  {seconds.hrs} :{seconds.mins}:{seconds.secs}</p>
<button onClick={()=>start(60)}>start timer</button>

<button onClick={clear}> Reset</button> */}



    <Header/>
    <Routing/>
    </div>
  
  );
}

export default App;
