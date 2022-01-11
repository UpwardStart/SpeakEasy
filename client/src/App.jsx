import { useEffect, useState } from 'react';
import Auth from './screens/Auth';
import parseRoute from './lib/parse-route';
import Home from './screens/Home';
import { theme } from './themes/themes';
import { ThemeProvider } from '@mui/styles';


export default function App() {
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });
  }, []);

  const handleSignIn = (result) => {
    const { credentials, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    setUser({ user: credentials });
  }

  const handleSignOut = () => {
    window.localStorage.removeItem('react-content-jwt');
    setUser(null);
  }

  const renderPage = () => {
    if (route.path === '') {
      return <Home
        user={user}
        onSignOut={handleSignOut}
        onSignIn={handleSignIn}/>
    }
    if (route.path === 'sign-in') {
      return <Auth
        action="sign-in"
        onSignIn={handleSignIn} />
    }
    if (route.path === 'sign-up') {
      return <Auth
        action="sign-up"
        onSignIn={handleSignIn} />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      { renderPage() }
    </ThemeProvider>
  );
}
