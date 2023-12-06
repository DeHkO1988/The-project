import style from '../Edit/Edit.module.css';
import { Loader } from '../Loader/Loader';

export const EditForm = ({
    load,
    car,
    errors,
    editCarInfo,
    editCarSubmit
}) => {
    return (
        <>
            {load ? <Loader />
                :
                <div className="mid-panel">

                    <form className="mid-panel-content" onSubmit={editCarSubmit}>
                        <div className="content">
                            <div className="title">
                                <h1 className={style.border}>Edit</h1>
                            </div>

                            <div className="searchbox">

                                <label htmlFor="brand" className="label">Brand</label>
                                <div className={style.row}>
                                    <input type="text" className={style.input} name='brand' id="brand" value={car.brand} onChange={editCarInfo} />
                                    {errors.brand ?
                                        <p className={style.validation}>{errors.brand}</p>
                                        :
                                        <p className={style.info}>At least 5 chars.</p>
                                    }
                                </div>

                                <label htmlFor="fuel" className="label">Fuel type</label>
                                <div className={style.row}>
                                    <input type="text" className={style.input} name='fuel' id="fuel" value={car.fuel} onChange={editCarInfo} />
                                    {errors.fuel ?
                                        <p className={style.validation}>{errors.fuel}</p>
                                        :
                                        <p className={style.info}>At least 5 chars.</p>
                                    }
                                </div>

                                <label htmlFor="mileage" className="label">Mileage</label>
                                <div className={style.row}>
                                    <input type="number" className={style.input} name='mileage' id="mileage" value={car.mileage} onChange={editCarInfo} />
                                    {errors.mileage ?
                                        <p className={style.validation}>{errors.mileage}</p>
                                        :
                                        <p className={style.info}>Have to be number.</p>
                                    }
                                </div>

                                <label htmlFor="registration" className="label">Year of manufacture</label>
                                <div className={style.row}>
                                    <input type="number" className={style.input} name='registration' id="registration" value={car.registration} onChange={editCarInfo} />
                                    {errors.registration ?
                                        <p className={style.validation}>{errors.registration}</p>
                                        :
                                        <p className={style.info}>Number between 1900 and 2023.</p>
                                    }
                                </div>

                                <label htmlFor="imageUrl" className="label">Image</label>
                                <div className={style.row}>
                                    <input type="text" className={style.input} name='imageUrl' id="imageUrl" value={car.imageUrl} onChange={editCarInfo} />
                                    {errors.imageUrl ?
                                        <p className={style.validation}>{errors.imageUrl}</p>
                                        :
                                        <p className={style.info}>Picture URL.</p>
                                    }
                                </div>

                                <label htmlFor="description" className="label">Opinion</label>
                                <div className={style.row}>
                                    <textarea className={style.inputText} name='description' id="description" value={car.description} onChange={editCarInfo}></textarea>
                                    {errors.description ?
                                        <p className={style.validation}>{errors.description}</p>
                                        :
                                        <p className={style.info}>At least 10 chars.</p>
                                    }
                                </div>

                                <button className={style.button} type="submit">Submit</button>

                            </div>


                        </div>
                    </form>
                </div>
            }

        </>

    );
}