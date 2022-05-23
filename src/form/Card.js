
let Card = (props) => {
    return (
        <div className="card mr-2 ml-2" style={{width: "16rem"}}>
            {/* <img src={imgProduk} className="card-img-top" alt="..."/> */}
            <img src={props.gambarCard} className="card-img-top" alt="..."/>
            <div className="card-body bg-light">
                <h5 className="card-title">{props.judul}</h5>
                <p className="card-text">{props.subTitle}</p>
                <div className='rating'>
                    <i className="fas fa-star text-success"></i>
                    <i className="fas fa-star text-success"></i>
                    <i className="fas fa-star text-success"></i>
                    <i className="fas fa-star-half-alt text-success"></i>
                    <i className="far fa-star text-success"></i><br/>
                </div>
                <div className='btnCard'>
                    <a href="#" className="btn btn-primary mr-3" data-target={`#${props.target}`} data-toggle="modal">Detail</a>
                    {/* <a href="#" className="btn btn-danger" onClick={props.tambahKeranjang}>Rp. {props.harga}</a> */}
                    <button className="btn btn-danger" onClick={props.tambahKeranjang}>Rp. {props.harga}</button>
                </div>
            </div>
        </div>
    )  
}

export default Card;