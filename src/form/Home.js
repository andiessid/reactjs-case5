import Carousel from './Carousel.js';
import Card from './Card.js';
import Modal from './Modal.js';

    let Home = (props) => {
        document.title = "Home"
        return (
            <div>
              <Carousel />
              <h4 className="text-center font-weight-bold m-4">PRODUK TERBARU</h4>
                <div className="row mx-auto">
                    {props.data.map((e,i) => 
                        <div key={i}>
                            <Card 
                            tambahKeranjang={()=> props.klikEvent(e)}
                            target={e.kodeBarang} 
                            judul={e.title} 
                            gambarCard={e.cover}
                            subTitle={e.subTitle}
                            harga={e.harga}
                            />
                            <Modal
                            tambahKeranjang={()=> props.klikEvent(e)}
                            target={e.kodeBarang} 
                            gambarCard={e.cover}
                            judul={e.title} 
                            merk={e.merk}
                            ongkir={e.ongkir}
                            stok={e.stok}
                            harga={e.harga}
                            />
                        </div>
                    )}
                </div>
            </div>
        )  
    }

    export default Home;