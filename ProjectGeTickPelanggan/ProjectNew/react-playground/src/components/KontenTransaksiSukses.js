import './KontenTransaksiSukses.css';
import MidKonten from './halamanUtama/MidKonten.js';
import BawahKonten from './halamanUtama/BawahKonten.js';
import TopKontenDetailEvent from './halamanUtama/TopKontenDetailEvent';
import LineBiru from '../gambar/LineBiru.svg';
import Kurang from '../gambar/Kurang.svg';
import TambahBiru from '../gambar/TambahBiru.svg';
import { Link, useNavigate } from 'react-router-dom';
import TopKontenDetailPemesanan from './halamanUtama/TopKontenDetailPemesanan';


const KontenTransaksiSukses = ()  => {
    const navigate = useNavigate();

    const halamanUtamaLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    }
   
    return (
        <div className='mainKontenTransaksiSukses'>
            <div className='mainKontenTransaksiSuksesItem'>
                <TopKontenDetailPemesanan/>
                <div className='mainKontenTransaksiSuksesItemBawah'>
                    <div className='mainKontenTransaksiSuksesItemBawahItem'>
                        <h1>Transaksi Berhasil</h1>
                    </div>
                    <div className='mainKontenTransaksiSuksesItemBawahItem'>
                        <p>Dapatkan Tiket Anda
Terima kasih telah membeli tiket kami</p>
                    </div>
                    <div className='mainKontenTransaksiSuksesItemBawahItem'>
                        <button onClick={halamanUtamaLogin}>
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KontenTransaksiSukses;