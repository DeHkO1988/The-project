import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

import { useState, useEffect } from "react";
import * as carService from './components/services/carService';



function App() {
    const [allCars, setAllCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll()
            .then(result => setAllCars(result));
    }, []);

    const createCarHandler = async (e, data) => {
        e.preventDefault();

        const newCar = await carService.create(data);

        setAllCars(state => [...state, newCar]);

        navigate('/catalog');

    }

    return (
        <>

            <Header />


            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog cars={allCars} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create' element={<Create createCarHandler={createCarHandler}/>} />
                <Route path='/details/:carId' element={<Details />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>

            <Footer />

        </>

    )
}

export default App
