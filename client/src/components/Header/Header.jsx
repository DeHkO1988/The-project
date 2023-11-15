import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { Link } from "react-router-dom";
import style from "../Header/Header.module.css";
import { IsLogin } from "../Header/IsLogin";
import { IsNotLogin } from "./IsNotLogin";


export const Header = ({

}) => {

    const { user, logoutHandler } = useContext(UserContext);

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
                    {user ? <p>Welcome {user.username}</p> : <p>Welcome GUEST</p>}

                    {/* <p> <a href="#">Mail Us : info@websitename.com</a></p> */}
                </div>
                <div className={style.menu}>
                    <ul>

                        {user ? <IsLogin logoutHandler={logoutHandler} /> : <IsNotLogin />}



                        <li className="marLeft20">
                            <Link to={"/catalog"}>Catalog</Link>
                        </li>

                        <li className="marLeft20">
                            <Link to={'/'}>home</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}