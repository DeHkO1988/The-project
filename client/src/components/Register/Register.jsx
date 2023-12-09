import { useState } from "react";
import { useContext } from "react";

import { UserContext } from "../Context/userContext";
import style from "../Register/Register.module.css";
import { test } from '../Register/errors';
import { Loader } from "../Loader/Loader";

export const Register = () => {

    const { registerHandler, loader } = useContext(UserContext);

    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    });

    const [errors, setErrors] = useState({});

    const setInfoForRegistration = (e) => {

        setRegisterData(state => ({ ...state, [e.target.name]: e.target.value.trim() }));

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
        <section className="page-wrap">
            <div className="page-wrapper">
                <div className="primary-content">

                    {loader ? <Loader />
                        :
                        <div className="mid-panel">
                            <form className="mid-panel-content" onSubmit={onSubmitHandler}>
                                <div className="content">
                                    <div className="title">
                                        <h1 className={style.border}>Registration</h1>
                                    </div>
                                    
                                    <div className="">

                                        <label htmlFor="email" className="">E-mail</label>
                                        <div className={style.row}>
                                            <input type="text" className={style.input} name="email" id="email" autoComplete="off" value={registerData.email} onChange={setInfoForRegistration} />
                                            <p className={errors.email ? style.error : style.info}>Valid e-mail address.</p>
                                        </div>

                                        <label htmlFor="username" className="">Username</label>
                                        <div className="row">
                                            <input type="text" className={style.input} name="username" id="username" autoComplete="off" value={registerData.username} onChange={setInfoForRegistration} />
                                            <p className={errors.username ? style.error : style.info}>More then 3 chars.</p>

                                        </div>

                                        <label htmlFor="password" className="">Password</label>
                                        <div className="row">
                                            <input type="password" className={style.input} name="password" id="password" autoComplete="off" value={registerData.password} onChange={setInfoForRegistration} />
                                            <p className={errors.password ? style.error : style.info}>More then 4 chars.</p>
                                        </div>

                                        <label htmlFor="repeatPassword" className="">Repeat password</label>
                                        <div className="row">
                                            <input type="password" className={style.input} name="repeatPassword" id="repeatPassword" autoComplete="off" value={registerData.repeatPassword} onChange={setInfoForRegistration} />
                                            <p className={errors.repeatPassword ? style.error : style.info}>Same as password.</p>
                                        </div>

                                        <button className={style.button} type="submit">Register</button>

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