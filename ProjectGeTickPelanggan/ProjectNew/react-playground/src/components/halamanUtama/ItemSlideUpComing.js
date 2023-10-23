import './ItemSlideUpComing.css';
import { useNavigate } from 'react-router-dom';
import ceritaCintaku from '../../gambar/ceritaCintaku.jpg';
import iconTanggal from '../../gambar/iconTanggal.svg';
import Line from '../../gambar/Line.svg';

const ItemSlideUpComing = ()  => {
    const navigate = useNavigate();

    const DetailEvent = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/DetailEvent');
    };

    return (
        <div className='mainItemSlideUpComing'>
            <div className='item' onClick={DetailEvent}>
                <div className='PosterEvent'>
                    <img src={ceritaCintaku}></img>
                </div>
                <div className='PosterEvent'>
                    <h6>Cerita Cintaku oleh Raditya Dika - Yogyakarta</h6>
                    <label>
                        <img className='banner' src={iconTanggal} ></img>
                        15 Maret 2023
                    </label>
                    <p className='harga'>Rp 400.000</p>
                    <img src={Line} className='garis'></img>
                    <p>Ekresa</p>
                </div>
            </div>
            <div className='item'>2</div>
            <div className='item'>3</div>
            <div className='item'>4</div>
            <div className='item'>5</div>
        </div>
    )
}

export default ItemSlideUpComing;