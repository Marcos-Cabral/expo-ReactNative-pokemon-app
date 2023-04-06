import React, { useReducer, useEffect } from 'react';
import { Navigation } from './navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/AuthReducer';

const init = () => {
  return false;
}

export default function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    console.log("Cambio!", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}