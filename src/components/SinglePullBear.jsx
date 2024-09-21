import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';

const SinglePullBear = ({ alldata }) => {
    const {addItem} =useCart();
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card-pull-bear" >
                <img src={alldata.image} height={350} style={{ objectFit: "contain" }} className="card-img-top  pullbearsingle" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title}</h5>
                    <p className="card-text">{alldata.description.slice(10,150)} </p>
                    <Link to={`/${alldata.id}`} className="btn btn-dark">More details</Link>
                    <button onClick={() => { addItem(alldata); swal("Good job!", "Product add to basket!", "success"); }} className='btn btn-warning me-3'>Add to cart</button>

                </div>
            </div>
        </div>

    )
}

export default SinglePullBear