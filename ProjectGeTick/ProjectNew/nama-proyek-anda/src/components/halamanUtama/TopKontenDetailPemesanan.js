import './TopKontenDetailPemesanan.css';
import ceritaCintaku from '../../gambar/ceritaCintaku.jpg';
import IconTanggal from '../../gambar/iconTanggal.svg';
import IconJam from '../../gambar/iconJam.svg';
import IconLokasi from '../../gambar/iconLokasi.svg';
import Line from '../../gambar/Line.svg'

const TopKontenDetailPemesanan = ()  => {
    return (
        <div className='mainTopKontenDetailPemesanan'>
            <img className='mainTopKontenDetailPemesananItem' src={ceritaCintaku}></img>
            <div className='mainTopKontenDetailPemesananItem'>
                <div className='mainTopKontenDetailPemesananJudul'>
                    <h3>Cerita Cintaku oleh Raditya Dika - Yogyakarta</h3>
                    <table >
                        <tr>
                            <td><img src={IconTanggal}></img></td>
                            <td>15 Maret 2023</td>
                        </tr>
                        <tr>
                            <td><img src={IconJam}></img></td>
                            <td>19:00 - 21:00 WIB</td>
                        </tr>
                        <tr>
                            <td><img src={IconLokasi}></img></td>
                            <td>Auditorium Driyakara Universitas Sanata Dharma</td>
                        </tr>
                    </table>
                    <img src={Line}></img>
                </div>
            </div>
        </div>
    )
}

export default TopKontenDetailPemesanan;