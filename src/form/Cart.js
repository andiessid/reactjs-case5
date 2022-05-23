    let Cart = (props) => {
        if(props.tambahCart <= 0) {
            return(
                <i className="fas fa-cart-plus ml-3 mr-3" data-toggle="tooltip" title="Keranjang Belanja"></i>
            )
        }else {
            return(
                <i className="fas fa-cart-plus ml-3 mr-3" data-toggle="tooltip" title="Keranjang Belanja"><span className='notif'>{props.tambahCart}</span></i>
            )    
        }
    }

export default Cart;
