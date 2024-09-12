import React, { useState } from 'react';
import UserItem from './UserItem';
import './Button.css'

function UserList({ users,onDelete }) {
    const [viewUserList, setViewUserList] = useState(false);

    const toggleViewUserList = () => {
        setViewUserList(!viewUserList);
    };


    return (
        <div>
            <button onClick={toggleViewUserList} className='user-hide-list'>
                {viewUserList ? 'Hide user list' : 'View user list'}
            </button>
            {viewUserList && (
                <div>
                    <h2>User list:</h2>
                    {users.map(user => (
                        <UserItem
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            isGoldClient={user.isGoldClient}
                            salary={user.salary}
                            image={user.image}
                            onDelete={onDelete} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserList;
