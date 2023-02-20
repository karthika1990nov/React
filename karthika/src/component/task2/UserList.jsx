const UserList = (props) => {

    const { users, isLoggedIn } = props;
    return isLoggedIn ? (
        <table border="1">
           
            {
                users.map((user) => {
                    return (
                        <>
                         <tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th></tr>
                        <td key={user.id}>{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.age}</td>
                        <td >{user.email}</td>
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
