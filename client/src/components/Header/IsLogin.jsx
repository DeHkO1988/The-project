import { Link } from "react-router-dom";


export const IsLogin = ({
    logoutHandler,
}) => {

    return (
        <>
            <li onClick={logoutHandler}>
                <Link to="/">Logout</Link>
            </li>

            <li >
                <Link to="/create">Create</Link>
            </li>

            <li >
                <Link to="MyPosts">My posts</Link>
            </li>
        </>
    );
}