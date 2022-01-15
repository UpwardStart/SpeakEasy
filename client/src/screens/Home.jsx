import React from 'react';
import ChatRoom from '../ChatRoom';
import Auth from './Auth';

export default function Home(props) {
  const { user, onSignOut, onSignIn } = props;

  return (
    user
      ? <ChatRoom
        user={user}
        onSignOut={onSignOut} />
      : <Auth
          key='sign-in'
          action='sign-in'
          onSignIn={onSignIn} />
  );
}
