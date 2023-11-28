import { Link } from "react-router-dom";

export const IsNotLogin = () => {
    return (

        <>
            <li >
                <Link to="/register">Register</Link>
            </li>

            <li >
                <Link to={"/Login"}>LogIn</Link>
            </li>

        </>
    );
}