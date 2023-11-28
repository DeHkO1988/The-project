import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from '../Context/userContext';
import style from '../MyPosts/MyPosts.module.css'

import * as carServices from '../services/carService'

export const MyPosts = () => {

    const { user } = useContext(UserContext);

    const [myPost, setMyPosts] = useState([]);

    useEffect(() => {
        carServices.getMyPosts(user._id)
            .then(result => setMyPosts(result));
    }, [user._id]);

    const isPosts = myPost.length > 0;

    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>here are All {user.username} posts</h1>
            </div>

            {isPosts ?
                <div className="panel-wrapper">

                    {myPost.map(post => {
                        return (
                            <div className="panel">
                                <div className="img"><img className='image' src={post.imageUrl} /></div>
                                <div className="title">
                                    <h1>{post.brand} {post.model}</h1>
                                </div>
                                <div className="border"></div>
                                <div className="content">
                                    <p>{post.price} $</p>
                                    <div className="button-link"><Link to={`/details/${post._id}`}>details</Link></div>
                                </div>
                            </div>
                        );
                    })}

                </div>
                :
                <h1 className={style.myPost}> You don't have any posts yet!</h1>
            }

        </div>

    );
}