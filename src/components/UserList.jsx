import User from "./User";

const UserList = ({ users }) => {
    const mappedUsers = users.map((user, index) => {
        return <User user={user} key={index} />
    })
    return (
        <>
            <div className="userList">
                <h1>List of Users</h1>
                <div className="mappedUsers">
                    {mappedUsers}
                </div>
            </div>
        </>
    );
}

export default UserList;