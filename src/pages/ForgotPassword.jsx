import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='container'>
      <div className="d-flex align-items-center justfiy-content-center flex-column">
        <h1 className='my-3 text-dark'>Register</h1>
        <div className="col-6">
          <form>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
            </div>


            <button type="submit" className="btn btn-dark">Send</button>
          </form>
          <div className="d-flex flex-column justfiy-content align-items-center">

            <Link to="/register" className='btn btn-outline-dark mt-4'>Create new account</Link>
          </div>
        </div>
      </div>

    </div>

  )
}

export default ForgotPassword