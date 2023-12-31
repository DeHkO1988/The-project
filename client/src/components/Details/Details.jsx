import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { CarContext } from "../Context/carsContext";

import * as carService from '../services/carService';
import * as likeService from '../services/likeService';
import { useState, useEffect } from "react";
import style from "../Details/Details.module.css";
import { Loader } from "../Loader/Loader";

export const Details = () => {
    const [car, setCar] = useState({});
    const [likes, setLikes] = useState([]);
    const [loader, setLoader] = useState(false);

    const { carId } = useParams();
    const { user } = useContext(UserContext);
    const { deleteCarHandler } = useContext(CarContext);

    useEffect(() => {
        setLoader(true);
        carService.getOne(carId)
            .then(res => setCar(res))
            .finally(() => setLoader(false));
        likeService.getAllLikes(carId)
            .then(res => setLikes(res));

    }, [carId]);

    const likeHandler = async (e) => {
        e.preventDefault();

        const addLike = await likeService.addLike(user, carId);

        setLikes(state => [...state, addLike]);

    };

    const unLikeHandler = (e) => {

        e.preventDefault();

        likeService.removeLike(user._id, user.accessToken, carId);

        setLikes(state => state.filter(likes => likes._ownerId !== user._id));

    };

    const isLike = likes.filter(x => x._ownerId === user?._id).length > 0;


    return (
        <div className="page-wrap">

            <div className="page-wrapper">


                <div className="primary-content">

                    {loader ? <Loader />
                        :
                        <div className="mid-panel marginTop">

                            <div className="mid-panel-content ">

                                <div className="title">
                                    <h1>{car.brand}</h1>
                                    <p className={style.likeCounter}>Likes: {likes.length}</p>
                                </div>
                                <div className="border"></div>
                                <div>
                                    <img className="catalogImage image" src={car.imageUrl} />
                                    <h2>Owner: {car.owner}</h2>
                                    <p><strong>Year of manufacture:</strong> {car.registration} year</p>
                                    <p><strong>Fuel type:</strong> {car.fuel}</p>
                                    <p><strong>Mileage:</strong> {car.mileage} km</p>

                                    <p className="padBottom"><strong>Opinion:</strong> {car.description}</p>
                                </div>
                                {user && (
                                    <>
                                        {user._id === car._ownerId && <Link to={`/edit/${car._id}`}><button className="button">Edit</button></Link>}
                                        {user._id === car._ownerId && <button className="button" onClick={() => deleteCarHandler(car._id)}>Delete</button>}
                                        {user._id !== car._ownerId && !isLike && <button className="button" onClick={likeHandler}>Like</button>}
                                        {user._id !== car._ownerId && isLike && <button className="button" onClick={unLikeHandler}>UnLike</button>}
                                    </>
                                )
                                }

                            </div>
                        </div>
                    }


                </div>

            </div>
        </div>
    );
}