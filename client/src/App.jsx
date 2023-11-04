import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Footer } from './components/Footer';
import { Catalog } from './components/Catalog';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Create } from './components/Create';


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
            </Routes>



            {/* <div class="page-wrap">
                <div class="page-wrapper">

                    <div class="primary-content">
                        <div class="mid-panel marginTop">
                            <div class="mid-panel-content ">
                                <div class="title">
                                    <h1>Aliquam arcu arcu aliquam eu</h1>
                                </div>
                                <div class="border"></div>
                                <div>
                                    <img class="catalogImage" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/10-porsche-718-cayman-gt4-rs-top-10.jpg" />
                                    <h2>Title</h2>
                                    <p><strong>Price:</strong></p>
                                    <p><strong>Price:</strong></p>
                                    <p><strong>Price:</strong></p>
                                    <p><strong>Price:</strong></p>
                                    <p><strong>Price:</strong></p>

                                    <p class="padBottom">Cras venenatis lacus vitae nisl tincidunt varius. Nunc dictum dapibus neque</p>
                                </div>
                                <p class="padBottom">Cras venenatis lacus vitae nisl tincidunt varius. Nunc dictum dapibus neque</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div> */}


            <Footer />

        </>
    )
}

export default App
