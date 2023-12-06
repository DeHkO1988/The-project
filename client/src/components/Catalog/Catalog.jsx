import { useContext } from "react";

import { CarContext } from "../Context/carsContext";
import { CarPanel } from "./CarPanel";
import { CatalogLoader } from "../Catalog/CatalogLoader";

export const Catalog = () => {

    const { allCars, loader } = useContext(CarContext);

    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>here are All car offers</h1>
            </div>
            {loader ? <CatalogLoader />
                :
                <CarPanel
                    allCars={allCars}
                />
            }
        </div>
    );
}