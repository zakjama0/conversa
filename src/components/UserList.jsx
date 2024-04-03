import User from "./User";

const UserList = ({users}) => {
    const mappedUsers = users.map((user, index)=>{
        return <User user={user} key={index}/>
    })
    return ( 
        <>
        <div className = "userList">
            <h1>UserList for this Chat</h1>

            <div className = "mappedUsers">
            {mappedUsers}
            </div>
            
            </div>
        </>
    );
}
 
export default UserList;