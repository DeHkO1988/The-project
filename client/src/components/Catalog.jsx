import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Catalog = () => {
    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users')
            .then(res => res.json())
            .then(data => setAllCars(Object.values(data)));
    }, []);

    console.log(allCars)

    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>Aliquam arcu arcu aliquam eu</h1>
            </div>
            <div className="panel-wrapper">
                {allCars.map(car => {
                    return (

                        <div className="panel" key={car._id}>
                            <div className="img"><img className='image' src={car.imageUrl} /></div>
                            <div className="title">
                                <h1>{car.brand} {car.model}</h1>
                            </div>
                            <div className="border"></div>
                            <div className="content">
                                <p>{car.price} $</p>
                                <div className="button-link"><Link to={`/details/${car._id}`}>details</Link></div>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    );
}