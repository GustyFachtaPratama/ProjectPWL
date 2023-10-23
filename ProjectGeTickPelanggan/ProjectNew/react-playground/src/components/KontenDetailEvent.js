import './KontenDetailEvent.css';
import MidKonten from './halamanUtama/MidKonten.js';
import BawahKonten from './halamanUtama/BawahKonten.js';
import TopKontenDetailEvent from './halamanUtama/TopKontenDetailEvent';
import { Link, useNavigate } from 'react-router-dom';

const KontenDetailEvent = ()  => {
    const navigate = useNavigate();

    const DetailEventTicket = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/DetailEventTicket');
    }
    
    return (
        <div className='mainKontenDetailEvent'>
            <div className='mainKotenDetailItem'>
                <TopKontenDetailEvent/>
                <div className='mainKotenDetailItemBawah'>
                    <div className='mainKotenDetailItemBawahItem'>
                        <div className='duoButtonDetailEvent'>
                            <button>Description</button>
                        </div>
                        <div className='duoButtonDetailEvent'>
                            <button onClick={DetailEventTicket}>Ticket</button>
                        </div>
                    </div>
                    <div className='mainKotenDetailItemBawahItem'>
                        <div className='InsertDetailEventBottom'>
                            <p>
                                Baca bagian Syarat dan Ketentuan sebelum membeli tiket untuk acara ini

                                .***
                                Cerita Cintaku 2022 oleh Raditya Dika adalah pertunjukan standup comedy oleh Raditya Dika (100% materi baru) dan interaksi bersama penonton.
                                ***

                                Jika ada tulisan full booked bukan berarti tiket habis (sold out) tapi artinya sudah dipesan dan menunggu dibayar. Jika ada yang gagal bayar tiket tersedia kembali. Sering-sering cek halaman ini.
                                Syarat & Ketentuan
                                Acara ini hanya untuk 17 tahun ke atas. Wajib menunjukkan kartu identitas yang sah (KTP/Paspor/SIM) pada saat penukaran E-Voucher dengan tiket.
                                Penonton wajib sudah vaksin 3x . Kecuali yang tidak bisa vaksin dengan alasan kesehatan, wajib membawa surat keterangan dokter. Hasil scan Peduli Lindungi harus berwarna hijau. Bagi penonton usia 17 tahun, wajib sudah vaksin 2x. Hasil scan Peduli Lindungi harus berwarna hijau.
                                Acara ini mengandung kata-kata dan tema yang kasar / sensitif.
                                Pengunjung wajib menggunakan masker selama acara berlangsung, dan mengikuti protokol kesehatan yang berlaku.
                                Registrasi ulang dimulai 2 jam sebelum acara. Pintu masuk ditutup ketika acara berlangsung dan yang terlambat tidak diperbolehkan masuk.
                                Pengunjung wajib mematikan handphone, dan perangkat elektronik lain, selama acara. Segala perekaman berbentuk audio dan video akan ditindak sesuai hukum yang berlaku. Panitia berhak melakukan langkah-langkah guna memastikan hal tersebut tidak terjadi. Pelanggar akan langsung dikeluarkan tanpa peringatan.
                                Dilarang membawa makanan/minuman, anak-anak, bayi, atau pun binatang peliharaan.
                                Tiket yang sudah dibeli tidak dapat dikembalikan. E-Voucher wajib ditukar dengan tiket yang sah di tempat acara.
                                Penyelenggara berhak menolak penonton yang tidak memenuhi syarat dan ketentuan di atas.
                                Jika ada pertanyaan lebih lanjut bisa email ke support@loket.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KontenDetailEvent;