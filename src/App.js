// import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './asset/css/App.css';
import {Navbar, Sidebar, Footer, Home, Listproduct} from './form/Index.js'
import {imgHeadphone, imgKamera, imgLaptop, imgSpeaker, imgJacket, imgUsb, imgSsd, imgSdCard} from './asset/img/produk/Index.js'
import React, { useState } from 'react';

// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
      // data : [
      //   {
      //     id : 1,
      //     kodeBarang : "hp001",
      //     cover : imgHeadphone,
      //     title : "Headphone",
      //     subTitle : "Headphone Bluetooth free ongkir",
      //     harga : "300.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   },
      //   {
      //     id : 2,
      //     kodeBarang : "kamera001", 
      //     cover : imgKamera,
      //     title : "Kamera",
      //     subTitle : "kamera DSLR CANON Type 700D",
      //     harga : "700.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   },
      //   {
      //     id : 3,
      //     kodeBarang : "laptop001",
      //     cover : imgLaptop,
      //     title : "Laptop Asus",
      //     subTitle : "Laptop Asus RAM 2 GB Layar 14 Inch",
      //     harga : "2.500.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   },
      //   {
      //     id : 4,
      //     kodeBarang : "speaker001",
      //     cover : imgSpeaker,
      //     title : "Speaker",
      //     subTitle : "Speaker Bluetooth free ongkir",
      //     harga : "500.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   },
      //   {
      //     id : 5,
      //     kodeBarang : "jaket001",
      //     cover : imgJacket,
      //     title : "Jacket Kulit",
      //     subTitle : "Jacket Kulit Impor bahan kulit asli",
      //     harga : "350.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   },
      //   {
      //     id : 6,
      //     kodeBarang : "usb001",
      //     cover : imgUsb,
      //     title : "USB iPHONE",
      //     subTitle : "USB khusus iPHONE bahan nilon",
      //     harga : "250.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   },
      //   {
      //     id : 7,
      //     kodeBarang : "ssd001",
      //     cover : imgSsd,
      //     title : "SSD Samsung",
      //     subTitle : "External SSD Samsung Kapasitas 55 GB",
      //     harga : "650.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   },
      //   {
      //     id : 8,
      //     kodeBarang : "sdcard001",
      //     cover : imgSdCard,
      //     title : "SD Card Sandisk",
      //     subTitle : "SD Card Sandisk kapasitas 128 GB",
      //     harga : "1.250.000",
      //     merk : "Boze/5B",
      //     ongkir : "Standar",
      //     stok : "120"
      //   }
      // ],
//       jumlah : 0,
//       keranjang : []
//     }
//   }  
  // // function ekpresi pada saat klik 
  // klikBeli = (troli)=> {
  //   let updateKeranjang = [...this.state.keranjang]
  //   updateKeranjang.push(troli)
  //   this.setState({
  //     jumlah : this.state.jumlah + 1,
  //     keranjang : updateKeranjang
  //   })
  // }

  // // function ekpresi pada saat klik beli pada list produk
  // beliList = (e)=> {
  //   let keranjang = [...this.state.keranjang]
  //   let index = keranjang.findIndex(d=>d.id === e)
  //   keranjang.splice(index,1)
  //   this.setState({keranjang,jumlah:this.state.jumlah-1})
  // }


//   render() {
    // return (
    //   <Router>
    //     <div className="App">
    //       <Navbar jumlah={this.state.jumlah}/>
    //       <div className="row mt-5 no-gutters">
    //         <Sidebar />
    //         <div className="col-md-10 bg-light">
    //           <Routes>
    //             <Route path="/" element={<Home klikEvent={this.klikBeli}  data={this.state.data}/>} />
    //             <Route path="/Cart" element={<Listproduct checkOut={this.beliList} daftarBelanja={this.state.keranjang}/>} />
    //           </Routes>  
    //         </div>
    //       </div>
    //       <br />
    //       <Footer />
    //     </div>
    //   </Router>  
    // );
//   }
// }

function useData(value){
  let [data, setData] = useState(value);

  return {
    value : data,
    setData
  }
}



function App() {
  let items = [
    {
      id : 1,
      kodeBarang : "hp001",
      cover : imgHeadphone,
      title : "Headphone",
      subTitle : "Headphone Bluetooth free ongkir",
      harga : "300.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    },
    {
      id : 2,
      kodeBarang : "kamera001", 
      cover : imgKamera,
      title : "Kamera",
      subTitle : "kamera DSLR CANON Type 700D",
      harga : "700.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    },
    {
      id : 3,
      kodeBarang : "laptop001",
      cover : imgLaptop,
      title : "Laptop Asus",
      subTitle : "Laptop Asus RAM 2 GB Layar 14 Inch",
      harga : "2.500.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    },
    {
      id : 4,
      kodeBarang : "speaker001",
      cover : imgSpeaker,
      title : "Speaker",
      subTitle : "Speaker Bluetooth free ongkir",
      harga : "500.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    },
    {
      id : 5,
      kodeBarang : "jaket001",
      cover : imgJacket,
      title : "Jacket Kulit",
      subTitle : "Jacket Kulit Impor bahan kulit asli",
      harga : "350.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    },
    {
      id : 6,
      kodeBarang : "usb001",
      cover : imgUsb,
      title : "USB iPHONE",
      subTitle : "USB khusus iPHONE bahan nilon",
      harga : "250.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    },
    {
      id : 7,
      kodeBarang : "ssd001",
      cover : imgSsd,
      title : "SSD Samsung",
      subTitle : "External SSD Samsung Kapasitas 55 GB",
      harga : "650.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    },
    {
      id : 8,
      kodeBarang : "sdcard001",
      cover : imgSdCard,
      title : "SD Card Sandisk",
      subTitle : "SD Card Sandisk kapasitas 128 GB",
      harga : "1.250.000",
      merk : "Boze/5B",
      ongkir : "Standar",
      stok : "120"
    }
  ];

  let barang = useData(items)
  let jumlah = useData(0)
  let keranjang = useData([])

  // function ekpresi pada saat klik 
  let klikBeli = (troli)=> {
    let updateKeranjang = [...keranjang.value]
    updateKeranjang.push(troli)
    jumlah.setData(jumlah.value + 1)
    keranjang.setData(updateKeranjang)
  }

  // function ekpresi pada saat klik beli pada list produk
  let beliList = (e)=> {
    let updateKeranjang = [...keranjang.value]
    let index = updateKeranjang.findIndex(d=>d.id === e)
    updateKeranjang.splice(index,1)
    keranjang.setData(updateKeranjang)
    jumlah.setData(jumlah.value - 1)
  }

  return (
    <Router>
      <div className="App">
        <Navbar jumlah={jumlah.value}/>
        <div className="row mt-5 no-gutters">
          <Sidebar />
          <div className="col-md-10 bg-light">
            <Routes>
              <Route path="/" element={<Home klikEvent={klikBeli}  data={barang.value}/>} />
              <Route path="/Cart" element={<Listproduct checkOut={beliList} daftarBelanja={keranjang.value}/>} />
            </Routes>  
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </Router>  
  );

}

export default App;
