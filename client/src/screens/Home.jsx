import React from 'react';
import ChatRoom from '../ChatRoom';
import Auth from './Auth';

export default function Home(props) {
  const { user } = props;

  return (
    user
      ? <ChatRoom
        user={user}
        onSignOut={props.handleSignOut} />
      : <Auth
          key='sign-in'
          action='sign-in'
          onSignIn={props.onSignIn} />
  );
}
