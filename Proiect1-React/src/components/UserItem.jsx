import React from 'react';
import './Button.css'

function UserItem(props) {
    const {id,name, email, isGoldClient,salary,image,onDelete} = props;


    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p>{salary}</p>
            <img src={image} alt="user"  style={{ maxWidth: '20%', height: 'auto'}} />
            <button onClick={() =>onDelete(id)} className='user-delete'>Delete user</button>
        </div>
    );
}

export default UserItem;