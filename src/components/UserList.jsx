import User from "./User";

const UserList = ({users}) => {
    const mappedUsers = users.map((user, index)=>{
        return <User user={user} key={index}/>
    })
    return ( 
        <>
            <h1>List of Users</h1>
            {mappedUsers}
        </>
    );
}
 
export default UserList;