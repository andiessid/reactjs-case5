    let Modal = (props) => {
      return (
            <div>
                <div className="modal fade" id={props.target} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detail Produk</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                <img src={props.gambarCard} />
                                </div>
                                <div className="col-md-6">
                                <table className="table table-borderless">
                                    <tbody>
                                    <tr>
                                        <th>Nama Produk</th>
                                        <td>{props.judul}</td>
                                        </tr>
                                        <tr>
                                        <th>Merk/Type</th>
                                        <td>{props.merk}</td>
                                        </tr>
                                        <tr>
                                        <th>Biaya Ongkir</th>
                                        <td>{props.ongkir}</td>
                                        </tr>
                                        <tr>
                                            <th>Rating Produk</th>
                                            <td>
                                                <i className="fas fa-star text-success"></i>
                                                <i className="fas fa-star text-success"></i>
                                                <i className="fas fa-star text-success"></i>
                                                <i className="fas fa-star-half-alt text-success"></i>
                                                <i className="far fa-star text-success"></i><br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Stock Produk</th>
                                            <td>{props.stok} pcs</td>
                                        </tr>
                                        <tr>
                                            <th>Harga</th>
                                            <td>Rp. {props.harga}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">KEMBALI</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close" onClick={props.tambahKeranjang}>
                            <span aria-hidden="true">BELI</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
  
  export default Modal;