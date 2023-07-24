import React from 'react'
import HomeSection from './HomeSection'
import TopDeals from './TopDeals'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide py-3" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://pbs.twimg.com/media/C0SShxrWIAEWsEA.jpg" className="d-block w-100" alt="mobile" height="650px" />
          </div>
          <div className="carousel-item">
            <img src="https://wallpaperaccess.com/full/1252105.jpg" className="d-block w-100" alt="mobile" height="650px" />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.paisawapas.com/blog/wp-content/uploads/2021/10/Nike-Promo-Code.jpg" className="d-block w-100" alt="mobile" height="650px" />
          </div>

          <div className="carousel-item">
            <img src="https://wristadvisor.com/wp-content/uploads/2021/12/Rolex-Watches-For-Men.jpg" className="d-block w-100" alt="mobile" height="650px" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <HomeSection />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/he0/hd2/28274016256030/private-brands_Top-Carousal-msite20220915_.jpg" className=" w-100" alt="mobile" height="500px" />
      </div>

      <br />
      <br />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-center">Top Watch pick of the day</h1>
            <hr />
          </div>
        </div>
      </div>
      <TopDeals />
    </div>
  )
}

export default Home