    let Footer = () => {
        return (
            <div>
                <footer className="bg-dark text-white p-5">
                    <div className="row">
                    <div className="col-md-3">
                        <h5>LAYANAN PELANGGAN</h5>
                        <ul>
                        <li>Pusat Bantuan</li>
                        <li>Cara Pembelian</li>
                        <li>Pengiriman</li>
                        <li>Cara Pengembalian</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>TENTANG KAMI</h5>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-md-3">
                        <h5>MITRA KERJASAMA</h5>
                        <ul>
                        <li>GOJEK</li>
                        <li>GRAB</li>
                        <li>JNE</li>
                        <li>PT. Pos Indonesia</li>
                        <li>TIKI</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>HUBUNGI KAMI</h5>
                        <ul>
                        <li>021-2367-9081</li>
                        <li>customer@myshop.com</li>
                        </ul>
                    </div>
                    </div>
                </footer>

                <div className="copyright text-center text-white font-weight-bold bg-warning p-2">
                    <p>Develop by Andies Copyright <i className="far fa-copyright"></i>2022</p>
                </div>

            </div>
        )  
    }
  
  export default Footer;