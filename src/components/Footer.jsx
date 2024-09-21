import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top footer-style footer-main">
                <div className="col mb-3 footer-section">
                    <h5>Trendyol</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 footer-yazi ">Biz Kimiz</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Kariyer</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0  footer-yazi">İletişim</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Trendyol'da Satış Yap</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Güvenli Alışveriş</a></li>
                    </ul>
                    <div className="images-one">
                        <img src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/footer-amex.png" alt="" />
                    </div>
                </div>
                <div className="col mb-3">
                    <h5>Haqqimizda</h5>
                    <ul className="nav flex-column footer-section-two">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi ">Who we are</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Careers</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Contact us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi ">Sustainability</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Mobil Uygulamalar</a></li>
                    </ul>
                    <div className="images-two">
                        <img src="https://cdn.dsmcdn.com/web/production/iosV2.svg" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/googleV2.svg" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/huaweiV2.svg" alt="" />
                    </div>
                    
                </div>
                <div className="col mb-3">
                    <h5>Kampanyalar</h5>
                    <ul className="nav flex-column footer-section">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Aktif Kampanyalar</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Elite Üyelik</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Hediye Fikirleri</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Trendyol Fırsatları</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Sosyal Medya</a></li>
                    </ul>
                    <div className="images-three">
                        <img src="https://cdn.dsmcdn.com/web/production/facebookV2.svg" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/instagramV2.svg" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/twitterV2.svg" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/youtubeV2.svg" alt="" />
                    </div>
                    
                </div>
                <div className="col mb-3">
                    <h5>Yardim</h5>
                    <ul className="nav flex-column footer-section">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi ">Sıkça Sorulan Sorular</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi ">Canlı Yardım</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">Nasıl İade Edebilirim</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-yazi">İşlem Rehberi</a></li>
                    </ul>
                    <div className="images-four">
                        <img src="https://cdn.dsmcdn.com/web/production/etbis-qr.png" alt="" />
                       
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer