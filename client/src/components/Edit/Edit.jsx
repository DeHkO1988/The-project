import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { CarContext } from "../Context/carsContext";
import * as carService from '../services/carService';
import style from '../Edit/Edit.module.css';

export const Edit = () => {
    const [car, setCar] = useState({
        brand: '',
        fuel: '',
        mileage: '',
        registration: '',
        imageUrl: '',
        description: '',
    });
    const { editCarHandler } = useContext(CarContext);

    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => setCar(result))
    }, [carId]);

    const editCarInfo = (e) => {
        const result = setCar(({ ...car, [e.target.name]: e.target.value }));
    };

    return (
        <section className="page-wrap">
            <div className="page-wrapper">
                <div className="primary-content">
                    <div className="mid-panel">

                        <form className="mid-panel-content" onSubmit={(e) => editCarHandler(e, car, carId)}>
                            <div className="content">
                                <div className="title">
                                    <h1 className={style.border}>Edit</h1>
                                </div>

                                <div className="searchbox">

                                    <label htmlFor="brand" className="label">Brand</label>
                                    <div className={style.row}>
                                        <input type="text" className={style.input} name='brand' id="brand" value={car.brand} onChange={editCarInfo} />
                                        <p className={style.info}>At least 5 chars.</p>
                                    </div>

                                    <label htmlFor="fuel" className="label">Fuel type</label>
                                    <div className={style.row}>
                                        <input type="text" className={style.input} name='fuel' id="fuel" value={car.fuel} onChange={editCarInfo} />
                                        <p className={style.info}>At least 5 chars.</p>
                                    </div>

                                    <label htmlFor="mileage" className="label">Mileage</label>
                                    <div className={style.row}>
                                        <input type="number" className={style.input} name='mileage' id="mileage" value={car.mileage} onChange={editCarInfo} />
                                        <p className={style.info}>Have to be number.</p>
                                    </div>

                                    <label htmlFor="registration" className="label">Year of manufacture</label>
                                    <div className={style.row}>
                                        <input type="number" className={style.input} name='registration' id="registration" value={car.registration} onChange={editCarInfo} />
                                        <p className={style.info}>Number between 1900 and 2023.</p>
                                    </div>

                                    <label htmlFor="imageUrl" className="label">Image</label>
                                    <div className={style.row}>
                                        <input type="text" className={style.input} name='imageUrl' id="imageUrl" value={car.imageUrl} onChange={editCarInfo} />
                                        <p className={style.info}>Picture URL.</p>
                                    </div>

                                    <label htmlFor="description" className="label">Opinion</label>
                                    <div className={style.row}>
                                        <textarea className={style.inputText} name='description' id="description" value={car.description} onChange={editCarInfo}></textarea>
                                        <p className={style.info}>At least 10 chars.</p>
                                    </div>

                                    <button className={style.button} type="submit">Submit</button>

                                </div>


                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}