import {Slide1, Slide2, Slide3} from '../asset/img/slide/Index.js'

    let Carousel = () => {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slide1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Slide2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Slide3} className="d-block w-100" alt="..." />
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        )  
    }
  
  export default Carousel;