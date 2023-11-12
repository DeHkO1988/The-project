import { useState, useEffect } from "react";
import style from '../Login/Login.module.css';

export const Login = ({
    loginHandler,
    errors,
    errorCleaner
}) => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        return () => {
            errorCleaner();
        }
    }, []);


    const loginData = (e) => {
        setLogin(({ ...login, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        loginHandler(e, login);
    };




    return (
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel" onSubmit={onSubmit}>
                <div className="content">
                    <div className="title">
                        <h1 className='border'>Log In</h1>
                    </div>

                    {errors.login && <p className={style.error}>Error: Login or password don't match!</p>}

                    <div className="searchbox">

                        <label className="label" htmlFor="email">Email</label>
                        <div className="row">
                            <input type="text" className="input column" name="email" id="email" value={login.email} onChange={loginData} autoComplete="off" />

                        </div>

                        <label className="label" htmlFor="password">Password</label>
                        <div className="row">
                            <input type="password" className="input column" name="password" id="password" value={login.password} onChange={loginData} autoComplete="off" />

                        </div>

                        <button className="button" type="submit">Log in</button>


                    </div>




                </div>
            </form>
        </div>
    );
}