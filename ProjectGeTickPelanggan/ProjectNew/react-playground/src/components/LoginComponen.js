import './LoginComponen.css';
import { Link, useNavigate } from 'react-router-dom';
import GeTickLogo from '../gambar/GeTick.svg';

const LoginComponen = ()  => {
    const navigate = useNavigate();

    const halamanUtama = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/');
    }

    const halamanUtamaLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    }

    return (
        <div className='mainLoginComponen'>
            <div className="mainLoginCompnenItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className='mainLoginCompnenItem'>
            <h1>Sign in to <class className='putih'>GetTick</class></h1>
            </div>
            <div className='mainLoginCompnenItem'>
                <div className='mainLoginCompnenItemMain'>
                <h3>Email:</h3>
                </div>
                <div className='mainLoginCompnenItemMain'>
                <input type="text" placeholder="Masukkan teks di sini" />
                </div>
                <div className='mainLoginCompnenItemMain'>
                <h3>Password:</h3>
                </div>
                <div className='mainLoginCompnenItemMain'>
                <input type="password" placeholder="Masukkan teks di sini" />
                </div>
                <div className='mainLoginCompnenItemMain'>
                <button onClick={halamanUtamaLogin} className='buttonLogin'>Login</button>
                </div>
            </div>
            <div className='mainLoginCompnenItem'>
                <button className='buttonKembali' onClick={halamanUtama}>Kembali</button>
            </div>
            <div className='mainLoginCompnenItem'>
                <div className='bawah'>
                    <p>belum memiliki akun? </p>
                    <Link to="/Login/CreateAkun" >buat akun</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginComponen;