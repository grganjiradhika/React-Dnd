import React from 'react';

export default function UserLists() {
    const userlists = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ];
    return (
        <div>
            <h1>User Lists</h1>
            <ul>
                {userlists.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
