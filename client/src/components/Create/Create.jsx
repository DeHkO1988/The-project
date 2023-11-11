import { useState } from "react";

export const Create = ({
    createCarHandler,
}) => {

    const [values, setValues] = useState({
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

    const createCarInfo = (e) => {

        const result = setValues(({ ...values, [e.target.name]: e.target.value }));

    }


    return (
        <div className="page-wrap">
            <div className="top-border"></div>
            <form className="search-panel" onSubmit={(e) => createCarHandler(e, values)}>
                <div className="content">
                    <div className="title">
                        <h1 className='border'>Create</h1>
                    </div>

                    <div className="searchbox">

                        <label htmlFor="brand" className="label">Brand</label>
                        <div className="row">
                            <input type="text" className="input column" name='brand' id="brand" value={values.brand} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="model" className="label">Model</label>
                        <div className="row">
                            <input type="text" className="input column" name='model' id="model" value={values.model} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="fuel" className="label">Fuel type</label>
                        <div className="row">
                            <input type="text" className="input column" name='fuel' id="fuel" value={values.fuel} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="type" className="label">Type</label>
                        <div className="row">
                            <input type="text" className="input column" name='type' id="type" value={values.type} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="price" className="label">Price</label>
                        <div className="row">
                            <input type="text" className="input column" name='price' id="price" value={values.price} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="mileage" className="label">Mileage</label>
                        <div className="row">
                            <input type="text" className="input column" name='mileage' id="mileage" value={values.mileage} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="registration" className="label">First registration</label>
                        <div className="row">
                            <input type="text" className="input column" name='registration' id="registration" value={values.registration} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="imageUrl" className="label">Image</label>
                        <div className="row">
                            <input type="text" className="input column" name='imageUrl' id="imageUrl" value={values.imageUrl} onChange={createCarInfo} />
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <label htmlFor="description" className="label">Description</label>
                        <div className="row">
                            <textarea className="input text" name='description' id="description" value={values.description} onChange={createCarInfo}></textarea>
                            <input type="text" className="input column" name='1' hidden />
                        </div>

                        <button className="button" type="submit">Submit</button>

                    </div>


                </div>
            </form>
        </div>
    );
}