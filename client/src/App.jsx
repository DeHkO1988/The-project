import { Routes, Route, useNavigate } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

import { UserProvider } from './components/Context/userContext';
import { CarProvider } from './components/Context/carsContext';

import { MyPosts } from './components/MyPosts/MyPosts';
import { About } from './components/About/About';
import { RouteGuard } from './components/RouteGuard/RouteGuard';


function App() {

    return (
        <>
            <UserProvider>
                <CarProvider>


                    <Header />

                    <Routes >
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/create' element={
                            <RouteGuard>
                                <Create />
                            </RouteGuard>

                        } />
                        <Route path='/details/:carId' element={<Details />} />
                        <Route path='/edit/:carId' element={
                            <RouteGuard>
                                <Edit />
                            </RouteGuard>
                        } />
                        <Route path='/myPosts' element={
                            <RouteGuard>
                                <MyPosts />
                            </RouteGuard>
                        } />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>

                    <Footer />


                </CarProvider>
            </UserProvider>
        </>

    )
}

export default App