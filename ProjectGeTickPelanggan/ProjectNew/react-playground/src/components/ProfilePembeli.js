import './ProfilePenjual.css';
import { Link, useNavigate } from 'react-router-dom';
import IconUser from '../gambar/iconUser.svg';
import ceritaCintaku from '../gambar/ceritaCintaku.jpg';
import iconTanggal from '../gambar/iconTanggal.svg';
import Line from '../gambar/Line.svg';


const ProfilePenjual = ()  => {
    const navigate = useNavigate();

    const HalamanEditEvent = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual/EditEvent');
    }

    const halamanUtamaLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    }
    
    const editAkun = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual/EditAkun');
    }

    return (
        <div className='mainProfilePenjual'>
            <div className="mainProfilePenjualItem">
            <img src={IconUser} alt="Icon User" />
            </div>
            <div className='mainProfilePenjualItem'>
                <div className='mainProfilePenjualItemMain'>
                <h3>Email:</h3>
                </div>
                <div className='mainProfilePenjualItemMain'>
                <input type="text" Value="Ekresa" readOnly/>
                </div>
                <div className='mainProfilePenjualItemMain'>
                <h3>Password:</h3>
                </div>
                <div className='mainProfilePenjualItemMain'>
                <input type="text" Value="Kepo"  readOnly/>
                </div>
                <div className='mainProfilePenjualItemMain'>
                <button onClick={editAkun} className='buttonEdit'>Edit</button>
                </div>
            </div>
            <div className='mainProfilePenjualItem'>
                <button onClick={halamanUtamaLogin} className='buttonKembali'>Kembali</button>
            </div>
            <div className='mainProfilePenjualItem'>
                <div className='bawahProfil'>
                    <div className='bawahProfilItem'>
                        <p>Riwayat Pembelian Ticket</p>
                    </div>
                    <div className='mainItemSlideRiwayatCreateEvent'>
                        <div className='item'>
                            <div className='PosterEventProfil'>
                                <img src={ceritaCintaku}></img>
                            </div>
                            <div className='PosterEventProfil'>
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
                        <div className='item'>6</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePenjual;