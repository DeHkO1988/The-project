import { Link } from "react-router-dom";

export const IsNotLogin = () => {
    return (

        <>
            <li className="marLeft20">
                <Link to="/register">Register</Link>
            </li>

            <li className="marLeft20">
                <Link to={"/Login"}>LogIn</Link>
            </li>
        </>
    );
}