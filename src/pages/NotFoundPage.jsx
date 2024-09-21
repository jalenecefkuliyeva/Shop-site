import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Link to="/" className='d-flex justify-content-center'>
        <img src="https://d33wubrfki0l68.cloudfront.net/a286a5707c8f775b01e4bbd8e68fbfeccb65eb96/8aa30/images/2022/06/404-page-n3.png" alt="" />
        
    </Link>
  )
}

export default NotFoundPage