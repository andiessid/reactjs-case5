    let Listproduct = (props) => {
        document.title = "cart"
        return (
            <div className='container'>
                <br />
                <ul className="list-group">
                    {props.daftarBelanja.map((daftar,i) =>
                        <li key={i} className="list-group-item">
                            <img alt="list product" className='gbrList' src={daftar.cover} />
                            <h4>{daftar.title}</h4>
                            <small>Rp. {daftar.harga}</small>
                            <button className='btn-beli btn btn-warning' onClick={()=>props.checkOut(daftar.id)}>BELI</button>
                        </li>
                    )}
                </ul>
            </div>
        )  
    }
  
  export default Listproduct;