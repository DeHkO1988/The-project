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
import { UserContext } from './components/Context/userContext';
import * as carService from './components/services/carService';
import * as userService from './components/services/userService';



function App() {
    const [allCars, setAllCars] = useState([]);
    const [user, setUser] = useState(null);
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

    };

    const loginHandler = async (e, data) => {

        e.preventDefault();

        try {

            const token = await userService.login(data);

            setUser(token);

        } catch (error) {
            console.log(error)
        };

        navigate('/');

    };

    const logoutHandler = () => {
        setUser(null);

        navigate('/');
    };

    const registerHandler = async (data) => {
       
        const token = await userService.register(data);

        setUser(token);

        navigate('/');

    };

    return (
        <>
            <UserContext.Provider value={user}>

                <Header logoutHandler={logoutHandler} />

                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog cars={allCars} />} />
                    <Route path='/login' element={<Login loginHandler={loginHandler} />} />
                    <Route path='/register' element={<Register registerHandler={registerHandler} />} />
                    <Route path='/create' element={<Create createCarHandler={createCarHandler} />} />
                    <Route path='/details/:carId' element={<Details />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>

                <Footer />

            </UserContext.Provider>
        </>

    )
}

export default App
