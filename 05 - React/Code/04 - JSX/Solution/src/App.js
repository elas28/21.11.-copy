import React from 'react';

export default function App() {

  const name = 'Ivan';

  const user = {
    firstName: 'Luka',
    lastName: 'Horvat'
  }

  const formatUser = userData => userData.firstName + ' ' + userData.lastName;

  let friendOrStranger = '';
  if (user.lastName === 'Horvat') {
    friendOrStranger = 'Hello, friend!'
  } else {
    friendOrStranger = 'Hello, stranger!'
  }

  const friendOrStrangerFunction = userData => {
    if (userData.lastName === 'Horvat') {
      return 'Hello, friend!';
    } else {
      return 'Hello, stranger!';
    }
  }

  return (
    <div className='App'>
      <h1>Hello, world!</h1>
      <h2>Hello, {name}</h2>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{formatUser(user)}</p>
      <p>{friendOrStranger}</p>
      <h3>{friendOrStrangerFunction(user)}</h3>
    </div>
  );
}
