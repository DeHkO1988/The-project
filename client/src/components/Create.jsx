export const Create = () => {
    return (
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel">
                <div className="content">
                    <div className="title">
                        <h1 className='border'>Create</h1>
                    </div>

                    <div className="searchbox">

                        <label className="label">E-mail</label>
                        <div className="row">
                            <input type="text" className="input column" name='1' />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label className="label">Username</label>
                        <div className="row">
                            <input type="text" className="input column" name='1' />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label className="label">Password</label>
                        <div className="row">
                            <input type="text" className="input column" name='1' />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label className="label">Repeat password</label>
                        <div className="row">
                            <input type="text" className="input column" name='1' />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label className="label">Search the site here...</label>
                        <div className="row">
                            <textarea className="input text" name='4'></textarea>
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <button className="button" type="submit">Log in</button>

                    </div>


                </div>
            </form>
        </div>
    );
}