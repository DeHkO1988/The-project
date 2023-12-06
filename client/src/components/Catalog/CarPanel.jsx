import { Link } from "react-router-dom";
import style from "./Catalog.module.css";

export const CarPanel = ({
    allCars
}) => {

    return (
        <>
            {allCars.length > 0 ?
                <div className="panel-wrapper">

                    {allCars.map(car => {
                        return (
                            <div className="panel" key={car._id}>
                                <div className="img"><img className='image' src={car.imageUrl} /></div>
                                <div className="title">
                                    <h1>{car.brand}</h1>
                                </div>
                                <div className="border"></div>
                                <div className="content">
                                    <div className="button-link"><Link to={`/details/${car._id}`}>details</Link></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                :
                <h1 className={style.catalog}>There are No offers yet!</h1>
            }
        </>
    );
}