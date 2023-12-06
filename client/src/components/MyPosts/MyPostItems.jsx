import style from '../MyPosts/MyPosts.module.css';
import { Link } from "react-router-dom";

export const MyPostsItems = ({
    myPost
}) => {

    const isPosts = myPost.length > 0;

    return (
        <>
            {isPosts ?
                <div className="panel-wrapper">

                    {myPost.map(post => {
                        return (
                            <div className="panel" key={post._id}>
                                <div className="img"><img className='image' src={post.imageUrl} /></div>
                                <div className="title">
                                    <h1>{post.brand}</h1>
                                </div>
                                <div className="border"></div>
                                <div className="content">
                                    <div className="button-link"><Link to={`/details/${post._id}`}>details</Link></div>
                                </div>
                            </div>
                        );
                    })}

                </div>
                :
                <h1 className={style.myPost}> You don't have any posts yet!</h1>
            }
        </>

    );
}