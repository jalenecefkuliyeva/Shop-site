import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PullBear from './pages/PullBear'
import Bershka from './pages/Bershka'
import Defacto from './pages/Defacto'
import Dyson from './pages/Dyson'
import Mavi from './pages/Mavi'
import Nike from './pages/Nike'
import Karaca from './pages/Karaca'
import pullbears from './data/Pull&Bear'
import HeaderOne from './components/HeaderOne'
import HeaderTwo from './components/HeaderTwo'
import HeaderThree from './components/HeaderThree'
import Footer from './components/Footer'
import './style.css'
import SinglePullBear from './components/SinglePullBear'
import { ApiContext } from './context/ApiContext'
import { ModeContext } from './context/ModeContext'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Contact from './pages/Contact'
import Account from './pages/account/Account'
import ChangePassword from './pages/account/ChangePassword'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetails from './pages/ProductDetails'


const Main = () => {
    const [mode] = useContext(ModeContext);

    return (
        <div className={mode}>
            <HeaderOne />
            <HeaderTwo />

            <HeaderThree />
            <Routes>
                <Route path="/" element={<PullBear />}> </Route>
                <Route path="/:id" element={<ProductDetails />}> </Route>
                <Route path="*" element={<NotFoundPage/>}> </Route>
                <Route path="/bershka" element={<Bershka />}></Route>
                <Route path="/defacto" element={<Defacto />} ></Route>
                <Route path="/dyson" element={<Dyson />}></Route>
                <Route path="/mavi" element={<Mavi />}></Route>
                <Route path="/nike" element={<Nike />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/karaca" element={<Karaca />}></Route>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/changepassword" element={<ChangePassword />}></Route>
            </Routes>

            <Footer />
        </div>
    )
}


const App = () => {

    return (
        <BrowserRouter>

            <Main />


        </BrowserRouter>



    )
}

export default App