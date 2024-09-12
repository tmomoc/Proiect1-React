import React, { useState } from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;
    const [viewUserList,setViewUserList] = useState(false);

    const toogleViewUserList =() =>{
        setViewUserList(!viewUserList);
    }

    return (
        <div>
            <button onClick={toogleViewUserList}>
            {viewUserList ? 'Ascunde Lista utilizator' : 'Afișează Lista utilizator'}
            </button>
            { viewUserList && (
            <div>
                <h2>Lista utilizatorilor:</h2>
                { users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={user.salary}
                        image={user.image}      
                        key={ index }
                    />
                })}
            </div>
       )}
        </div>
    );
}

export default UserList;