import './KontenDetailPemesanan.css';
import MidKonten from './halamanUtama/MidKonten.js';
import BawahKonten from './halamanUtama/BawahKonten.js';
import TopKontenDetailEvent from './halamanUtama/TopKontenDetailEvent';
import LineBiru from '../gambar/LineBiru.svg';
import Kurang from '../gambar/Kurang.svg';
import TambahBiru from '../gambar/TambahBiru.svg';
import { Link, useNavigate } from 'react-router-dom';
import TopKontenDetailPemesanan from './halamanUtama/TopKontenDetailPemesanan';


const KontenDetailPemesanan = ()  => {
    const navigate = useNavigate();

    const DetailEventTicket = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/DetailEventTicket');
    }

    const Payment = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/DetailEventTicket/DetailPemesanan/TransaksiSukses');
    }
    

    const halamanUtamaLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    }

    const DetailPemesanan = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/DetailEventTicket/DetailPemesanan');
    }
   
    return (
        <div className='mainKontenDetailPemesanan'>
            <div className='mainKontenDetailPemesananItem'>
                <TopKontenDetailPemesanan/>
                <div className='mainKontenDetailPemesananItemBawah'>
                    <div className='mainKontenDetailPemesananItemBawahItem'>
                        <h2>Detail Informasi Pembeli</h2>
                        <div className='Jarak'>
                            <p>Nama Lengkap :</p>
                            <input type="text"/>
                            <p>Email :</p>
                            <input type="text"/>
                            <p>Nomor Ponsel :</p>
                            <input type="text"/>
                            <p>Nomor KTP :</p>
                            <input type="text"/>
                            <p>Metode Pembayaran :</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='mainKontenDetailPemesananItemBawahItem'>
                        <h2>Invoice</h2>
                        <table border="1px">
                            <tr className='garisBawah'>
                                <td>Pesanan</td>
                                <td>Harga</td>
                            </tr>
                            <tr>
                                <td>1 Broze Ticket</td>
                                <td>Rp 200.000</td>
                            </tr>
                            <tr>
                                <td>Totak</td>
                                <td>Rp 200.000</td>
                            </tr>
                        </table>
                        <div className='duoButtonDetailPemesanan'>
                            <button onClick={DetailEventTicket} className='KembaliDetailPemesanan'>Kembali</button>
                            <button onClick={Payment} className='CheckPayment'>Check Payment Status</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KontenDetailPemesanan;