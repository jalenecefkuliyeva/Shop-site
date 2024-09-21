import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext';



const HeaderTwo = () => {

  const [lang] = useContext(LangContext);
  return (
    <div>
      <div className="container">
        <div className="row">
          <ul className='header-two'>


            <li>
              {lang === "az" ? "Azerbaycan" : "Azerbaijan"}
            </li>
            <li>
              {lang === "az" ? "Qadin" : "Woman"}
            </li>
            <li>
              {lang === "az" ? "Kisi" : "Man"}

            </li>
            <li>
             <Link className="nav-link contactcss" to="/contact">{lang==="az"?"Elaqe":"Contact"}</Link>

            </li>
            <li>
              {lang === "az" ? "Ev&Yasam" : "Home&Life"}

            </li>
            <li>
              {lang === "az" ? "Supermarket" : "Supermarket"}

            </li>
            <li>
              {lang === "az" ? "Kosmetika" : "MakeUp"}

            </li>
            <li>
              {lang === "az" ? "Ayaqqabi&Canta" : "Shoes&Bags"}

            </li>
            <li>
              {lang === "az" ? "Elektronika" : "Electronics"}

            </li>
            <li>
              {lang === "az" ? "Sport&Outdoor" : "Spor&Outdoor"}

            </li>
            <li>
              {lang === "az" ? "Cox satanlar" : "Best Seller"}

            </li>
            <li>
              {lang === "az" ? "Flas Mehsullar" : "Flash products"}

            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default HeaderTwo