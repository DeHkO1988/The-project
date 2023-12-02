import { useContext } from "react";

import { CarContext } from "../Context/carsContext";
import { CarPanel } from "./CarPanel";
import style from "./Catalog.module.css";

export const Catalog = () => {

    const { allCars } = useContext(CarContext);

    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>here are All car offers</h1>
            </div>

            {allCars.length > 0 ?
                <div className="panel-wrapper">



                    {allCars.map(car => {
                        return (
                            <CarPanel
                                key={car._id}
                                _id={car._id}
                                image={car.imageUrl}
                                brand={car.brand}
                            />
                        );
                    })}



                </div>
                :
                <h1 className={style.catalog}>There are No offers yet!</h1>
            }

        </div>
    );
}