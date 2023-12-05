import { useState, useContext } from "react";
import { CarContext } from "../Context/carsContext";

import { validation } from '../Create/validation';
import style from '../Create/Create.module.css';

export const Create = () => {

    const { createCarHandler } = useContext(CarContext);

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
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel" onSubmit={onSubmitHandler}>
                <div className="content">
                    <div className="title">
                        <h1 className='border'>Create</h1>
                    </div>

                    <div className="searchbox">

                        <label htmlFor="brand" className="label">Brand</label>
                        <div className="row">
                            <input type="text" className="input column" name='brand' id="brand" value={values.brand} onChange={createCarInfo} />
                            {error.brand ?
                                <p className={style.validation}>{error.brand}</p>
                                :
                                <p>At least 5 chars.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        {/* <label htmlFor="model" className="label">Model</label>
                        <div className="row">
                            <input type="text" className="input column" name='model' id="model" value={values.model} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div> */}

                        <label htmlFor="fuel" className="label">Fuel type</label>
                        <div className="row">
                            <input type="text" className="input column" name='fuel' id="fuel" value={values.fuel} onChange={createCarInfo} />
                            {error.fuel ?
                                <p className={style.validation}>{error.fuel}</p>
                                :
                                <p>At least 5 chars.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        {/* <label htmlFor="type" className="label">Type</label>
                        <div className="row">
                            <input type="text" className="input column" name='type' id="type" value={values.type} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div> */}

                        {/* <label htmlFor="price" className="label">Price</label>
                        <div className="row">
                            <input type="text" className="input column" name='price' id="price" value={values.price} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div> */}

                        <label htmlFor="mileage" className="label">Mileage</label>
                        <div className="row">
                            <input type="number" className="input column" name='mileage' id="mileage" value={values.mileage} onChange={createCarInfo} />
                            {error.mileage ?
                                <p className={style.validation}>{error.mileage}</p>
                                :
                                <p>Have to be number.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="registration" className="label">Year of manufacture</label>
                        <div className="row">
                            <input type="number" className="input column" name='registration' id="registration" value={values.registration} onChange={createCarInfo} />
                            {error.registration ?
                                <p className={style.validation}>{error.registration}</p>
                                :
                                <p>Number between 1900 and 2023.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="imageUrl" className="label">Image</label>
                        <div className="row">
                            <input type="text" className="input column" name='imageUrl' id="imageUrl" value={values.imageUrl} onChange={createCarInfo} />
                            {error.imageUrl ?
                                <p className={style.validation}>{error.imageUrl}</p>
                                :
                                <p>Picture URL.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="description" className="label">Opinion</label>
                        <div className="row">
                            <textarea className="input text" name='description' id="description" value={values.description} onChange={createCarInfo}></textarea>
                            {error.description ?
                                <p className={style.validation}>{error.description}</p>
                                :
                                <p>At least 10 chars.</p>
                            }
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <button className="button" type="submit">Submit</button>

                    </div>


                </div>
            </form>
        </div>
    );
}