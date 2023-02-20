const UserList = (props) => {

    const { users, isLoggedIn } = props;
    return isLoggedIn ? (
        <table border="1">
           <tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th></tr>
            {
                users.map((user) => {
                   
                    return (
                        <>
                         <tr>
                        <td key={user.id}>{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.age}</td>
                        <td >{user.email}</td>
                        </tr>
                        </>
                        
                    );
                })
            }
        </table>
    ) : (
        <p>Please Login!!</p>
    );
}

export { UserList };
