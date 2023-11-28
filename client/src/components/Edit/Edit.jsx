import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { CarContext } from "../Context/carsContext";
import * as carService from '../services/carService';

export const Edit = () => {
    const [car, setCar] = useState({
        brand: '',
        model: '',
        fuel: '',
        type: '',
        price: '',
        mileage: '',
        registration: '',
        imageUrl: '',
        description: '',
    });
    const {editCarHandler} = useContext(CarContext);

    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => setCar(result))
    }, [carId]);


    const editCarInfo = (e) => {
        const result = setCar(({ ...car, [e.target.name]: e.target.value }));
    };


    return (
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel" onSubmit={(e) => editCarHandler(e, car, carId)}>
                <div className="content">
                    <div className="title">
                        <h1 className='border'>Edit</h1>
                    </div>

                    <div className="searchbox">

                        <label htmlFor="brand" className="label">Brand</label>
                        <div className="row">
                            <input type="text" className="input column" name='brand' id="brand" value={car.brand} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="model" className="label">Model</label>
                        <div className="row">
                            <input type="text" className="input column" name='model' id="model" value={car.model} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="fuel" className="label">Fuel type</label>
                        <div className="row">
                            <input type="text" className="input column" name='fuel' id="fuel" value={car.fuel} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="type" className="label">Type</label>
                        <div className="row">
                            <input type="text" className="input column" name='type' id="type" value={car.type} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="price" className="label">Price</label>
                        <div className="row">
                            <input type="text" className="input column" name='price' id="price" value={car.price} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="mileage" className="label">Mileage</label>
                        <div className="row">
                            <input type="text" className="input column" name='mileage' id="mileage" value={car.mileage} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="registration" className="label">First registration</label>
                        <div className="row">
                            <input type="text" className="input column" name='registration' id="registration" value={car.registration} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="imageUrl" className="label">Image</label>
                        <div className="row">
                            <input type="text" className="input column" name='imageUrl' id="imageUrl" value={car.imageUrl} onChange={editCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="description" className="label">Description</label>
                        <div className="row">
                            <textarea className="input text" name='description' id="description" value={car.description} onChange={editCarInfo}></textarea>
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <button className="button" type="submit">Submit</button>

                    </div>


                </div>
            </form>
        </div>
    );
}