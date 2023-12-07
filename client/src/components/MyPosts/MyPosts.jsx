
import { useState, useEffect, useContext } from "react";
import { UserContext } from '../Context/userContext';


import { Loader } from "../Loader/Loader";
import { MyPostLoader } from "./MyPostLoader";
import * as carServices from '../services/carService';
import { MyPostsItems } from '../MyPosts/MyPostItems';


export const MyPosts = () => {

    const { user } = useContext(UserContext);

    const [myPost, setMyPosts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        carServices.getMyPosts(user._id)
            .then(result => setMyPosts(result))
            .finally(() => setLoader(false));
    }, [user._id]);

    const isPosts = myPost.length > 0;

    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>{user.username} personal posts</h1>
            </div>

            {loader ? <MyPostLoader /> : <MyPostsItems myPost={myPost} />}

        </div>

    );
}