import React from 'react'
import { Link } from 'react-router-dom'


const HeaderThree = () => {
    return (
        <div>
            <div className="header-three">
                <div className="container-fluid">
                    <div className="row">
                        <ul className='header-three1'>
                            <li> <Link to="/"><div className="sections">
                                <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg" alt="" />
                               </div></Link></li>
                            <li><Link to="/bershka"> <div className="sections">
                                <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/4/26/Bershka_202304260943.png" alt="" />
                                </div> </Link></li>
                            <li><Link to="/defacto"> <div className="sections">
                                <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Defacto_202301270049.jpg" alt="" />
                               </div>  </Link></li>
                            <li><Link to="/dyson">  <div className="sections">
                                <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Dyson_202301270049.jpg" alt="" />
                               </div> </Link></li>
                            <li><Link to="/mavi"><div className="sections">
                                <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Mavi_202301270522.png" alt="" />
                                </div> </Link></li>
                            <li><Link to="/nike"><div className="sections">
                                <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" alt="" />
                               </div></Link></li>
                            <li><Link to="/karaca"><div className="sections">
                                <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg" alt="" />
                                </div></Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderThree