import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';

const HeaderOne = () => {

    const [mode, setMode] = useContext(ModeContext);
    const [lang, setLang] = useContext(LangContext);
    const auth = JSON.parse(localStorage.getItem("users"));



    return (
        <div>
            <nav className=" container navbar header-one-main ">


                <h1 className='trendyol'>Trendyol</h1>




                <form className="d-flex form form-header" role="search">
                    <input className="form-control " type="search" placeholder={lang === "az" ? "Aradığınız ürün,kategori ve ya markayı yazısınız" : "Write the product, category or brand you are looking for"} aria-label="Search" />
                    <button className="btn header-one-btn " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            

                <button className='btn btn-warning ' onClick={() => {
                    lang === "az" ? setLang('en') : setLang('az')
                    lang === "az" ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'en')
                }
                }>{lang === "az" ? "EN" : "AZ"}</button>

                {localStorage.getItem('token') ? <span className=' ms-3'>Hello,<Link to="/account" >{auth[0].name} </Link></span> : <Link to="/login" className='btn btn-secondary ms-3'>Login</Link>}

               

            </nav>

        </div >
    )
}

export default HeaderOne