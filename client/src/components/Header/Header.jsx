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
            <Link to={"/"}>
                <div className={style.headerLeftPanel}>
                    <div className={style.logoWrap}>
                        <h2>share your fish tank ideas </h2>
                        {/* <div className={style.logo}> */}
                        {/* <h2>your slogan</h2> */}

                        {/* </div> */}
                    </div>
                </div>
            </Link>
            <div className={style.headerRightPanel}>
                <div className={style.headerRightPanelTop}>
                    {user ? <p>Welcome {user.email}</p> : <p>Welcome GUEST</p>}

                </div>
                <div className={style.menu}>
                    <ul>

                        {user ? <IsLogin logoutHandler={logoutHandler} /> : <IsNotLogin />}




                        <li className="marLeft20">
                            <Link to={"/catalog"}>Catalog</Link>
                        </li>

                        <li >
                            <Link to={"/"}>About</Link>
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