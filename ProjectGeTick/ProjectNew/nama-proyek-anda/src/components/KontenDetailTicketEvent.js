import './KontenDetailTicketEvent.css';
import MidKonten from './halamanUtama/MidKonten.js';
import BawahKonten from './halamanUtama/BawahKonten.js';
import TopKontenDetailEvent from './halamanUtama/TopKontenDetailEvent';
import LineBiru from '../gambar/LineBiru.svg';
import Kurang from '../gambar/Kurang.svg';
import TambahBiru from '../gambar/TambahBiru.svg';
import { Link, useNavigate } from 'react-router-dom';


const KontenDetailTicketEvent = ()  => {
    const navigate = useNavigate();

    const Deskripsi = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/DetailEvent');
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
        <div className='mainKontenDetailTicketEvent'>
            <div className='mainKontenDetailTicketEventItem'>
                <TopKontenDetailEvent/>
                <div className='mainKontenDetailTicketEventItemBawah'>
                    <div className='mainKontenDetailTicketEventItemBawahItem'>
                        <div className='duoButtonDetailTicketEvent'>
                            <button  onClick={Deskripsi} >Description</button>
                        </div>
                        <div className='duoButtonDetailTicketEvent'>
                            <button>Ticket</button>
                        </div>
                    </div>
                    <div className='mainKontenDetailTicketEventItemBawahItem'>
                        <div className='choiseTicket'>
                            <div className='choiseTicketKonten'>
                                
                                <h3>Bronze</h3>
                                <p>Harga sudah termasuk local tax dan service</p>
                                <p className='biru'>Berakhir 30 september 2023 - 23.59 WIB</p>
                                <img src={LineBiru}></img>
                                <span className='mainJumlahTicket'>
                                    Rp 400.000
                                </span>
                                <div className='duoButtonDetailTicket'>
                                    <button onClick={halamanUtamaLogin}  className='ButtonKembaliDetailTicket'>Kembali</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KontenDetailTicketEvent;