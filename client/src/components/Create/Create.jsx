import { useState, useContext } from "react";
import { CarContext } from "../Context/carsContext";

import { validation } from '../Create/validation';
import style from '../Create/Create.module.css';
import { Loader } from "../Loader/Loader";

export const Create = () => {

    const { createCarHandler, loader } = useContext(CarContext);

    const [values, setValues] = useState({
        brand: '',
        fuel: '',
        mileage: '',
        registration: '',
        imageUrl: '',
        description: '',
    });

    const [error, setErrors] = useState({});

    const createCarInfo = (e) => {

        setValues(({ ...values, [e.target.name]: e.target.value }));

    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const noErrors = {};
        const err = (validation(values));

        setErrors(validation(values));

        if (JSON.stringify(noErrors) === JSON.stringify(err)) {
            createCarHandler(values);
        }

    };

    return (
        <section className="page-wrap">
            <div className="page-wrapper">
                <div className="primary-content">
                    {loader ? <Loader />
                        :
                        <div className="mid-panel">

                            <form className="mid-panel-content" onSubmit={onSubmitHandler}>
                                <div className="content">
                                    <div className="title">
                                        <h1 className={style.border}>Create</h1>
                                    </div>

                                    <div className="searchbox">

                                        <label htmlFor="brand" className="label">Brand</label>
                                        <div className={style.row}>
                                            <input type="text" className={style.input} name='brand' id="brand" value={values.brand} onChange={createCarInfo} />
                                            <p className={error.brand ? style.validation : style.info}>At least 5 chars.</p>
                                        </div>

                                        <label htmlFor="fuel" className="label">Fuel type</label>
                                        <div className={style.row}>
                                            <input type="text" className={style.input} name='fuel' id="fuel" value={values.fuel} onChange={createCarInfo} />
                                            <p className={error.fuel ? style.validation : style.info}>At least 5 chars.</p>
                                        </div>

                                        <label htmlFor="mileage" className="label">Mileage</label>
                                        <div className={style.row}>
                                            <input type="number" className={style.input} name='mileage' id="mileage" value={values.mileage} onChange={createCarInfo} />
                                            <p className={error.mileage ? style.validation : style.info}>Have to be positive number.</p>
                                        </div>

                                        <label htmlFor="registration" className="label">Year of manufacture</label>
                                        <div className={style.row}>
                                            <input type="number" className={style.input} name='registration' id="registration" value={values.registration} onChange={createCarInfo} />
                                            <p className={error.registration ? style.validation : style.info}>Number between 1900 and 2023.</p>
                                        </div>

                                        <label htmlFor="imageUrl" className="label">Image</label>
                                        <div className={style.row}>
                                            <input type="text" className={style.input} name='imageUrl' id="imageUrl" value={values.imageUrl} onChange={createCarInfo} />
                                            <p className={error.imageUrl ? style.validation : style.info}>Picture URL.</p>
                                        </div>

                                        <label htmlFor="description" className="label">Opinion</label>
                                        <div className={style.row}>
                                            <textarea className={style.inputText} name='description' id="description" value={values.description} onChange={createCarInfo}></textarea>
                                            <p className={error.description ? style.validation : style.info}>At least 10 chars.</p>
                                        </div>

                                        <button className={style.button} type="submit">Submit</button>

                                    </div>

                                </div>
                            </form>

                        </div>

                    }

                </div>
            </div>
        </section>
    );
}