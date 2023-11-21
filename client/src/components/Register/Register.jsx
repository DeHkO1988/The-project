import { useState } from "react";
import { useContext } from "react";

import { UserContext } from "../Context/userContext";

export const Register = () => {

    const { registerHandler, errors } = useContext(UserContext)

    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    });

    // const [errors, setErrors] = useState({
    //     password: '',
    // });

    const setInfoForRegistration = (e) => {

        setRegisterData(state => ({ ...state, [e.target.name]: e.target.value }));

    };

    const onSubmitHandler = (e) => {

        e.preventDefault();

        registerHandler(registerData)

    };

    // const errorHandler = () => {

    //     if (registerData.password !== registerData.repeatPassword) {
    //         setErrors({ ...errors, password: 'Repeat password is not same as password!' });
    //     } else {
    //         setErrors({ ...errors, password: '' });
    //     };

    // };

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
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="username" className="label">Username</label>
                        <div className="row">
                            <input type="text" className="input column" name="username" id="username" autoComplete="off" value={registerData.username} onChange={setInfoForRegistration} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="password" className="label">Password</label>
                        <div className="row">
                            <input type="password" className="input column" name="password" id="password" autoComplete="off" value={registerData.password} onChange={setInfoForRegistration} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="repeatPassword" className="label">Repeat password</label>
                        <div className="row">
                            <input type="password" className="input column" name="repeatPassword" id="repeatPassword" autoComplete="off" value={registerData.repeatPassword} onChange={setInfoForRegistration} />
                            {errors.pass && <p>Error: {errors.pass}</p>}
                            <input type="text" className="input column" name='1' hidden />
                        </div>


                        <button className="button" type="submit">Register</button>



                    </div>


                </div>
            </form>
        </div>
    );
}