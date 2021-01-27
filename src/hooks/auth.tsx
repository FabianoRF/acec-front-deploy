import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
  contract_url: string;
}

interface Adm {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  token: string;
  user: User | undefined;
  adm: Adm | undefined;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User | undefined;
  adm: Adm | undefined;
  signIn(credentials: Credentials): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@acec:token');
    const user = localStorage.getItem('@acec:user');
    const adm = localStorage.getItem('@acec:adm');

    if (adm && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, adm: JSON.parse(adm), user: undefined };
    }

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user), adm: undefined };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user, isAdm } = response.data;

    localStorage.setItem('@acec:token', token);
    localStorage.setItem('@acec:user', JSON.stringify(user));

    if (isAdm) {
      localStorage.setItem('@acec:adm', JSON.stringify(user));
      setData({ token, user: undefined, adm: user });
    } else {
      localStorage.setItem('@acec:user', JSON.stringify(user));
      setData({ token, user, adm: undefined });
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    return isAdm;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@acec:token');
    localStorage.removeItem('@acec:user');
    localStorage.removeItem('@acec:adm');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, adm: data.adm, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
