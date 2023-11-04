
import { useState, useEffect } from "react";
import * as carService from '../services/carService';
import { CarPanel } from "./CarPanel";

export const Catalog = () => {

    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => setAllCars(result));
    }, []);


    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>Aliquam arcu arcu aliquam eu</h1>
            </div>
            <div className="panel-wrapper">
                {allCars.map(car => {
                    return (
                        <CarPanel
                            _id={car._id}
                            image={car.imageUrl}
                            brand={car.brand}
                            model={car.model}
                            price={car.price}
                        />
                    );
                })}

            </div>
        </div>
    );
}