import { Link } from "react-router-dom";
import style  from "../Header/Header.module.css";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerLeftPanel}>
                <div className={style.logoWrap}>
                    <div className={style.logo}>
                        <h2>your slogan</h2>
                        <h1>WebsiteName</h1>
                    </div>
                </div>
            </div>
            <div className={style.headerRightPanel}>
                <div className={style.headerRightPanelTop}>
                    <p>Welcome GUEST</p>
                    {/* <p> <a href="#">Mail Us : info@websitename.com</a></p> */}
                </div>
                <div className={style.menu}>
                    <ul>
                        <li className="marLeft20">
                            <Link to={'/'}>home</Link>
                        </li>

                        <li className="marLeft20">
                            <Link to={"/catalog"}>Catalog</Link>
                        </li>

                        <li className="marLeft20">
                            <Link to={"/Login"}>LogIn</Link>
                        </li>

                        <li className="marLeft20">
                            <Link to="/register">Register</Link>
                        </li>

                        <li className="marLeft20">
                            <Link to="/create">Create</Link>
                        </li>

                        <li className="marLeft20">
                            <Link to="/logout">Logout</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}