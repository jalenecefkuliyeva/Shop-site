import React, { useContext } from 'react'

import SinglePullBear from '../components/SinglePullBear';
import { ApiContext } from '../context/ApiContext';

const PullBear = () => {
  const [data] = useContext(ApiContext);
  return (
    <div className="container">
      <h1 className='text-center my-5'>Pull&Bear</h1>
      <div className="row g-5">
        {data.map(item => <SinglePullBear alldata={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default PullBear  