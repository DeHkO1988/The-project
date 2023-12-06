import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { CarContext } from "../Context/carsContext";
import * as carService from '../services/carService';
import { Loader } from '../Loader/Loader';
import { validation } from '../Edit/validation';
import { EditForm } from './EditForm';

export const Edit = () => {
    const [car, setCar] = useState({
        brand: '',
        fuel: '',
        mileage: '',
        registration: '',
        imageUrl: '',
        description: '',
    });

    const [load, setLoader] = useState(false);
    const [errors, setErrors] = useState({});
    const { editCarHandler, loader } = useContext(CarContext);

    const { carId } = useParams();

    useEffect(() => {
        setLoader(true);
        carService.getOne(carId)
            .then(result => setCar(result))
            .finally(() => setLoader(false));
    }, [carId]);

    const editCarInfo = (e) => {
        const result = setCar(({ ...car, [e.target.name]: e.target.value }));
    };

    const editCarSubmit = (e) => {
        e.preventDefault();

        setErrors(validation(car));

        const isValidate = validation(car);
        const noErrors = {};

        if (JSON.stringify(isValidate) === JSON.stringify(noErrors)) {
            editCarHandler(car, carId);
        }

    };

    return (
        <section className="page-wrap">
            <div className="page-wrapper">
                <div className="primary-content">

                    {loader ? <Loader />
                        :
                        <EditForm
                            load={load}
                            car={car}
                            errors={errors}
                            editCarInfo={editCarInfo}
                            editCarSubmit={editCarSubmit}
                        />
                    }

                </div>
            </div>
        </section>
    );
}