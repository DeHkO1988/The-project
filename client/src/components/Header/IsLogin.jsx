import { Link } from "react-router-dom";

export const IsLogin = () => {
    return (
        <>
            <li className="marLeft20">
                <Link to="/logout">Logout</Link>
            </li>

            <li className="marLeft20">
                <Link to="/create">Create</Link>
            </li>
        </>
    );
}