import { useState, useEffect } from "react";
import { useContext } from "react";

import { UserContext } from "../Context/userContext";
import { Loader } from "../Loader/Loader";
import style from '../Login/Login.module.css';

export const Login = ({
}) => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const { loginHandler, errors, errorCleaner, loader } = useContext(UserContext);

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
        <section className="page-wrap">
            <div className="page-wrapper">
                <div className="primary-content">

                    {loader ? <Loader />
                        :
                        <div className="mid-panel">
                            <form className="mid-panel-content" onSubmit={onSubmit}>

                                <div className="">
                                    <div className="">
                                        <h1 className={style.border}>Log In</h1>
                                    </div>

                                    {errors.login && <p className={style.error}>{errors.login}</p>}

                                    <div className="">

                                        <label className="" htmlFor="email">E-mail</label>
                                        <div className="row">
                                            <input type="text" className={style.input} name="email" id="email" value={login.email} onChange={loginData} autoComplete="on" />

                                        </div>

                                        <label className="" htmlFor="password">Password</label>
                                        <div className="row">
                                            <input type="password" className={style.input} name="password" id="password" value={login.password} onChange={loginData} autoComplete="on" />

                                        </div>
                                        
                                        <button className={style.button} type="submit">Log in</button>


                                    </div>

                                </div>
                            </form>
                        </div>
                    }

                </div>
            </div>
        </section>
    );
}