import { useState } from "react";

export const Login = ({
    loginHandler,
}) => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });


    const loginData = (e) => {
        setLogin(({ ...login, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        loginHandler(e, login);
    }


    return (
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel" onSubmit={onSubmit}>
                <div className="content">
                    <div className="title">
                        <h1 className='border'>Log In</h1>
                    </div>

                    <div className="searchbox">

                        <label className="label" htmlFor="email">Email</label>
                        <div className="row">
                            <input type="text" className="input column" name="email" id="email" value={login.email} onChange={loginData} autoComplete="off"/>
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label className="label" htmlFor="password">Password</label>
                        <div className="row">
                            <input type="password" className="input column" name="password" id="password" value={login.password} onChange={loginData} autoComplete="off"/>
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <button className="button" type="submit">Log in</button>

                    </div>


                </div>
            </form>
        </div>
    );
}