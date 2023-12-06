import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as carService from '../services/carService';
import { UserContext } from "./userContext";

export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {
    const [allCars, setAllCars] = useState([]);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        setLoader(true);
        carService.getAll()
            .then(result => setAllCars(result))
            .finally(() => setLoader(false));
    }, []);

    const createCarHandler = async (data) => {

        setLoader(true);

        try {

            const newCar = await carService.create(data, user);

            setAllCars(state => [...state, newCar]);

            navigate('/catalog');

        } catch (error) {

            alert(error);

        } finally {

            setLoader(false)

        }

    };

    const editCarHandler = async (car, carId) => {

        setLoader(true);

        try {
            const editedCar = await carService.edit(car, user, carId);

            const newState = allCars.map(x => x._id === editedCar._id ? editedCar : x);

            setAllCars(state => newState);

            navigate(`/details/${carId}`);

        } catch (error) {

            alert(error);

            return;

        } finally {

            setLoader(false);

        }

    };

    const deleteCarHandler = (carId) => {

        carService.deleteCar(carId, user);

        const newAllCars = allCars.filter(x => x._id !== carId);

        setAllCars(state => newAllCars);

        navigate('/catalog');
    };

    const carContextValues = {
        createCarHandler,
        deleteCarHandler,
        editCarHandler,
        allCars: allCars,
        loader: loader,
    };

    return (
        <>
            <CarContext.Provider value={carContextValues}>
                {children}
            </CarContext.Provider>
        </>
    );
}