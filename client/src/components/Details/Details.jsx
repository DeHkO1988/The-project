import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { CarContext } from "../Context/carsContext";
import * as carService from '../services/carService';
import { useState, useEffect } from "react";

export const Details = () => {
    const [car, setCar] = useState({});

    const { carId } = useParams();
    const { user } = useContext(UserContext);
    const { deleteCarHandler } = useContext(CarContext);


    useEffect(() => {
        carService.getOne(carId)
            .then(res => setCar(res));

    }, [carId]);


    return (
        <div className="page-wrap">
            <div className="page-wrapper">

                <div className="primary-content">
                    <div className="mid-panel marginTop">
                        <div className="mid-panel-content ">
                            <div className="title">
                                <h1>{car.brand} {car.model}</h1>
                            </div>
                            <div className="border"></div>
                            <div>
                                <img className="catalogImage image" src={car.imageUrl} />
                                <h2>Owner: {car.owner}</h2>
                                <p><strong>First Registration:</strong> {car.registration} year</p>
                                <p><strong>Fuel type:</strong> {car.fuel}</p>
                                <p><strong>Type:</strong> {car.type}</p>
                                <p><strong>Price:</strong> {car.price} $</p>
                                <p><strong>Mileage:</strong> {car.mileage} km</p>

                                <p className="padBottom"><strong>Description:</strong> {car.description}</p>
                            </div>
                            {user && (
                                <>
                                    {user._id === car._ownerId && <Link to={`/edit/${car._id}`}><button className="button">Edit</button></Link>}
                                    {user._id === car._ownerId && <button className="button" onClick={() => deleteCarHandler(car._id)}>Delete</button>}

                                    {user._id !== car._ownerId && <Link to={`/buy/${car._id}`}><button className="button" >Buy</button></Link>}
                                </>
                            )
                            }
                            {/* <>
                                {user?._id === car._ownerId && <Link to={`/edit/${car._id}`}><button className="button">Edit</button></Link>}
                                {user?._id === car._ownerId && <button className="button" onClick={() => deleteCarHandler(car._id)}>Delete</button>}

                                {user?._id !== car._ownerId && <Link to={`/buy/${car._id}`}><button className="button" >Buy</button></Link>}
                            </> */}


                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}