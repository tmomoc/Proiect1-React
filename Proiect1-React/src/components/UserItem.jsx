import React from 'react';


function UserItem(props) {
    const {name, email, isGoldClient,salary,image} = props;

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
        </div>
    );
}

export default UserItem;