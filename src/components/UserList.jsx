import User from "./User";

const UserList = ({users}) => {
    const mappedUsers = users.map((user, index)=>{
        return <User user={user} key={index}/>
    })
    return ( 
        <>
            <h1>UserList for this Chat</h1>
            {mappedUsers}
        </>
    );
}
 
export default UserList;