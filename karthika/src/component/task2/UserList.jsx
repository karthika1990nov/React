const UserList = (props) => {

    const { users, isLoggedUser } = props;
    return isLoggedUser ? (
        <>
        <p>User Data</p>
        <table border="1">
           <tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th></tr>
            {
                users.map((user) => {
                   
                    return (
                        <>
                         <tr key={user.id}>
                        <td >{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.age}</td>
                        <td >{user.email}</td>
                        </tr>
                        </>
                        
                    );
                })
            }
        </table>
        </>
    ) : (
        <p>Please Login Admin!!</p>
    );
}

export { UserList };
