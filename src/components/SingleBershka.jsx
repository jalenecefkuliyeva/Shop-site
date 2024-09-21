import React from 'react'

const SingleBershka = ({alldata}) => {
  return (
    <div>
         <div className='col-12 col-sm-6 col-md-4'>
            <div className="card" >
                <img src={alldata.image} height={300} style={{objectFit:"contain"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title.slice(10,20)}</h5>
                    <p className="card-text">{alldata.description.slice(10,40)}... </p>
                    <a href="#" className="">More details</a>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default SingleBershka