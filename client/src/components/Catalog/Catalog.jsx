import { CarPanel } from "./CarPanel";

export const Catalog = ({
    cars,
}) => {


    return (
        <div className="panel-wrap">
            <div className="top-content">
                <h1>Aliquam arcu arcu aliquam eu</h1>
            </div>
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
        </div>
    );
}