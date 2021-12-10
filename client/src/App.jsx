import { useEffect, useState } from 'react';
import ChatRoom from './ChatRoom';
import Auth from './screens/Auth';
import parseRoute from './lib/parse-route';
import Home from './screens/Home';


export default function App() {
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    window.addEventListener('hashChange', () => {
      setRoute(parseRoute(window.location.hash));
    });
  }, []);

  const handleSignIn = (result) => {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    setUser({ user });
  }

  const handleSignOut = () => {
    window.localStorage.removeItem('react-content-jwt');
    setUser(null);
  }

  const renderPage = () => {
    console.log(route);
    if (route.path === '') {
      return <Home
        user={user}
        onSignOut={handleSignOut}
        onSignIn={handleSignIn}/>
    }
    if (route.path === 'sign-in') {
      return <Auth
        key="sign-in"
        action="sign-in"
        onSignIn={handleSignIn} />
    }
    if (route.path === 'sign-up') {
      return <Auth
        key="sign-up"
        action="sign-up"
        onSignIn={handleSignIn} />
    }
  }

  return (
    <>
      { renderPage() }
    </>
  );
}
