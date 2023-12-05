import { useState } from "react";
import { useContext } from "react";

import { UserContext } from "../Context/userContext";
import style from "../Register/Register.module.css";
import { test } from '../Register/errors';

export const Register = () => {

    const { registerHandler } = useContext(UserContext);

    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    });

    const [errors, setErrors] = useState({});

    const setInfoForRegistration = (e) => {

        setRegisterData(state => ({ ...state, [e.target.name]: e.target.value }));

    };

    const onSubmitHandler = (e) => {

        e.preventDefault();

        setErrors(test(registerData));

        const noErrors = {};

        if (JSON.stringify(noErrors) === JSON.stringify(test(registerData))) {
            registerHandler(registerData, errors);
        }

    };

    return (
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel" onSubmit={onSubmitHandler}>
                <div className="content">
                    <div className="title">
                        <h1 className='border'>Registration</h1>
                    </div>

                    <div className="searchbox">

                        <label htmlFor="email" className="label">E-mail</label>
                        <div className="row">
                            <input type="text" className="input column" name="email" id="email" autoComplete="off" value={registerData.email} onChange={setInfoForRegistration} />
                            {errors.email ?
                                <p className={style.error}> {errors.email} </p>
                                :
                                <p>Valid e-mail address.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="username" className="label">Username</label>
                        <div className="row">
                            <input type="text" className="input column" name="username" id="username" autoComplete="off" value={registerData.username} onChange={setInfoForRegistration} />
                            {errors.username ?
                                <p className={style.error}> {errors.username} </p>
                                :
                                <p>More then 3 chars.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="password" className="label">Password</label>
                        <div className="row">
                            <input type="password" className="input column" name="password" id="password" autoComplete="off" value={registerData.password} onChange={setInfoForRegistration} />
                            {errors.password ?
                                <p className={style.error}> {errors.password} </p>
                                :
                                <p>More then 4 chars.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="repeatPassword" className="label">Repeat password</label>
                        <div className="row">
                            <input type="password" className="input column" name="repeatPassword" id="repeatPassword" autoComplete="off" value={registerData.repeatPassword} onChange={setInfoForRegistration} />
                            {errors.repeatPassword ?
                                <p className={style.error}> {errors.repeatPassword} </p>
                                :
                                <p>Same as password.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>


                        <button className="button" type="submit">Register</button>

                    </div>


                </div>
            </form>
        </div>
    );
}