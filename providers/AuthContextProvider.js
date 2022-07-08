import React, {useEffect, createContext, useContext, useState} from 'react';
import { api } from '../api/Api';

const AuthContext = createContext({token: '', setToken: () => {}});
export const AuthProvider = (props) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        api.defaults.headers['Authorization'] = token? `Bearer ${token}` : '';
    }, [token]);

    return (
        <AuthContext.Provider {...props} value={{token, setToken}} />
    )
}

export const useAuthContext = () => useContext(AuthContext);