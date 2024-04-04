import { useState } from "react";

const UserListForm = ({ users }) => {
    const [open, setOpen] = useState(false);
    const mappedUsers = users.map((user, index) => {
        return <p key={index}>{user}</p>
    })

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={toggle}>View User List</button>
            {open && (
                <div className="toggle">
                    {mappedUsers}
                </div>
            )}
        </div>
    );
}

export default UserListForm;