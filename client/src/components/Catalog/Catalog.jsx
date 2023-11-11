import { CarPanel } from "./CarPanel";
import style from "./Catalog.module.css";

export const Catalog = ({
    cars,
}) => {


    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>here are All car offers</h1>
            </div>

            {cars.length > 0 ?
                <div className="panel-wrapper">



                    {cars.map(car => {
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
                :
                <h1 className={style.denislav}>There are No offers yet!</h1>
            }

        </div>
    );
}