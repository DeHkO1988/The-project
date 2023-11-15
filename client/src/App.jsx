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

import { UserProvider } from './components/Context/userContext';
import { CarProvider } from './components/Context/carsContext';


function App() {

    return (
        <>
            <UserProvider>
                <CarProvider>

                    <Header />

                    <Routes >
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/details/:carId' element={<Details />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>

                    <Footer />
                </CarProvider>
            </UserProvider>
        </>

    )
}

export default App