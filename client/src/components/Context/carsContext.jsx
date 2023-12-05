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
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        carService.getAll()
            .then(result => setAllCars(result));
    }, []);

    const createCarHandler = async (data) => {

        const newCar = await carService.create(data, user);

        setAllCars(state => [...state, newCar]);

        navigate('/catalog');

    };

    const editCarHandler = async (e, car, carId) => {
        e.preventDefault();

        if (car.brand.length < 5) {
            alert('brand length too short');
            return;
        };

        if (car.fuel.length < 5) {
            alert('fuel length too short');
            return;
        };

        if (car.mileage <= 0) {
            alert('have to be positive number');
            return;
        };

        if (car.registration < 1900 || car.registration > 2023) {
            alert('Year of manufacture between 1900 and 2023');
            return;
        };

        if(car.image ) {
            alert('');
            return;
        };

        if (car.description.length < 10) {
            alert('Opinion at least 10 chars.');
            return;
        };

        const editedCar = await carService.edit(car, user, carId);

        const newState = allCars.map(x => x._id === editedCar._id ? editedCar : x);

        setAllCars(state => newState);

        navigate(`/details/${carId}`);
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
    };

    return (
        <>
            <CarContext.Provider value={carContextValues}>
                {children}
            </CarContext.Provider>
        </>
    );
}