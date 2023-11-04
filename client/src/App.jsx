import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Footer } from './components/Footer';
import { Catalog } from './components/Catalog';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Create } from './components/Create';
import { Details } from './components/details';
import { PageNotFound } from './components/PageNotFound';



function App() {

    return (
        <>
            <Header />


            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create' element={<Create />} />
                <Route path='/details/:carId' element={<Details />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>

            <Footer />

        </>
    )
}

export default App
