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
    const navigate = useNavigate();

    const loginHandler = async (e, data) => {

        e.preventDefault();

        try {

            const token = await userService.login(data);

            setUser(token);

            navigate('/');

        } catch (error) {
            setErrors(state => ({ ...state, login: error }));
        };

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

        const { repeatPassword, ...userInfo } = data;

        //if ((repeatPassword.length >= 5 && repeatPassword === userInfo.password) && (userInfo.username.length > 5)) {
        try {
            if (repeatPassword.length < 5 || repeatPassword !== userInfo.password) {

                throw (['pass', 'Repeat password length is less then 5 chars or dont match password!!!']);
            }

            const token = await userService.register(data);

            setUser(token);

            navigate('/');

        } catch (err) {
            console.log(err)
            setErrors(state => ({ ...state, [err[0]] : err[1] }));
        }


        //} else {
        //setErrors(state => ({ ...state, pass: 'Repeat password length is less then 5 chars or dont match password!!!' }))
        //}


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
        errors: errors
    }



    return (
        <>
            <UserContext.Provider value={contextValues}>
                {children}
            </UserContext.Provider>
        </>
    );
}