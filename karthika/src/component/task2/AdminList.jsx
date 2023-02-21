const AdminList = (props) => {

    const { Admin, isLoggedAdmin } = props;
    return isLoggedAdmin ? (
        <>
        <p>Admin Data</p>
        <table border="1">
           <tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th></tr>
            {
                Admin.map((Admin) => {
                   
                    return (
                        <>
                         <tr key={Admin.id}>
                        <td >{Admin.id}</td>
                        <td >{Admin.name}</td>
                        <td >{Admin.age}</td>
                        <td >{Admin.email}</td>
                        </tr>
                        </>
                        
                    );
                })
            }
        </table>
        </>
    ) : (
       <p>Please Login user!!</p>
    );
}

export { AdminList };
