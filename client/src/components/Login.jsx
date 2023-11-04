export const Login = () => {
    return (
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel">
                <div className="content">
                    <div className="title">
                        <h1 classNameName='border'>Log In</h1>
                    </div>

                    <div className="searchbox">

                        <label className="label">Username</label>
                        <div className="row">
                            <input type="text" className="input column" name='1' />
                            <input type="text" className="input column" name='1' hidden/>
                        </div>

                        <label className="label">Password</label>
                        <div className="row">
                            <input type="text" className="input column" name='1' />
                            <input type="text" className="input column" name='1' hidden/>
                        </div>

                        <button className="button" type="submit">Log in</button>

                    </div>


                </div>
            </form>
        </div>
    );
}