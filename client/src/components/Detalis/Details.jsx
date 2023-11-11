import { useParams, Link, useNavigate } from "react-router-dom";
import * as carService from '../services/carService';
import { useState, useEffect } from "react";

export const Details = () => {
    const [car, setCar] = useState({});
    const navigate = useNavigate();
    const { carId } = useParams();
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
                                <h2>{car.brand} {car.model}</h2>
                                <p><strong>First Registration:</strong> {car.registration}</p>
                                <p><strong>Fuel type:</strong> {car.fuel}</p>
                                <p><strong>Type:</strong> {car.type}</p>
                                <p><strong>Mileage:</strong> {car.mileage} km</p>
                                <p><strong>Price:</strong> {car.price} $</p>

                                <p className="padBottom"><strong>Description: </strong></p>
                            </div>

                            <Link to={`/edit/${car._id}`}><button className="button">Edit</button></Link>
                            <button className="button" >Delete</button>
                            <Link to={`/buy/${car._id}`}><button className="button" >Buy</button></Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}