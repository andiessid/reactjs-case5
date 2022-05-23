import Cart from './Cart.js';
import {Link} from 'react-router-dom';

    let Navbar = (props) => {
      return (
            <div>
                {/* Awal Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
                    <div className="container">

                        <h3><i className="fas fa-cart-plus text-success mr-2"></i></h3>
                        <Link className="navbar-brand font-weight-bold" to="/">MY SHOP</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mr-4"> 
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Beranda <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Reseller <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Hubungi Kami <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Bantuan <span className="sr-only">(current)</span></Link>
                            </li>

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <div className="icon mt-2">
                            <h5>
                                {/* <i className="fas fa-cart-plus ml-3 mr-3" data-toggle="tooltip" title="Keranjang Belanja"><span className='notif'>{this.props.jumlah}</span></i> */}
                                <Link style={{color:"black"}} to="/Cart">
                                    <Cart tambahCart={props.jumlah} />
                                </Link>
                                <i className="fas fa-envelope mr-3" data-toggle="tooltip" title="Surat Masuk"></i>
                                <i className="fas fa-bell mr-3" data-toggle="tooltip" title="Notifikasi"></i>
                            </h5>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Akhir Navbar */}

            </div>
        )  
    }
  
  export default Navbar;