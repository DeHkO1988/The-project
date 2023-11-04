import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-left-panel">
                <div className="logo-wrap">
                    <div className="logo">
                        <h2>your slogan</h2>
                        <h1>WebsiteName</h1>
                    </div>
                </div>
            </div>
            <div className="header-right-panel">
                <div className="header-right-panel-top">
                    <p>Call Us : 000 888 8888</p>
                    <p> <a href="#">Mail Us : info@websitename.com</a></p>
                </div>
                <div className="menu">
                    <ul>
                        <li className="marRight20">
                            <Link to={'/'}>home</Link>
                        </li>

                        <li className="marRight20">
                            <Link to={"/catalog"}>Catalog</Link>
                        </li>

                        <li>
                            <Link to={"/Login"}>LogIn</Link>
                        </li>

                        <li className="marRight20">
                            <Link to="/register">Register</Link>
                        </li>
                        
                        <li className="marRight20">
                            <Link to="/create">Create</Link>
                        </li>

                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}