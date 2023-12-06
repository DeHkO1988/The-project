import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as userService from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({
    children
}) => {

    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const loginHandler = async (e, data) => {

        e.preventDefault();

        setLoader(true);

        try {

            const token = await userService.login(data);

            setUser(token);

            navigate('/');

        } catch (error) {

            setErrors(state => ({ ...state, login: error }));

        } finally {
            setLoader(false);
        }

    };

    const logoutHandler = async () => {

        const response = await userService.logout(user);

        if (response.status === 204) {

            setUser(null);

            setErrors({});

            navigate('/');

        }

    };

    const registerHandler = async (data) => {

        try {

            const token = await userService.register(data);

            setUser(token);

            navigate('/');

        } catch (error) {

            alert(error);

            return;

        }

    };

    const errorCleaner = () => {
        setErrors({});
    };

    const contextValues = {
        loginHandler,
        logoutHandler,
        registerHandler,
        errorCleaner,
        user: user,
        errors: errors,
        loader: loader
    }

    return (
        <>
            <UserContext.Provider value={contextValues}>
                {children}
            </UserContext.Provider>
        </>
    );
}