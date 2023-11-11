import { Link } from "react-router-dom";

export const IsLogin = ({
    logoutHandler,
}) => {
    return (
        <>
            <li className="marLeft20" onClick={logoutHandler}>
                <Link to="/">Logout</Link>
            </li>

            <li className="marLeft20">
                <Link to="/create">Create</Link>
            </li>
        </>
    );
}