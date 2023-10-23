import "./Header.css";
import { useNavigate } from 'react-router-dom';
import GeTickLogo from '../gambar/GeTick.svg';
import IconSearc from '../gambar/iconSearc.svg';


const Header = ()  => {
    const navigate = useNavigate();

    const handleMasukClick = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login');
    };

    const handleCreateAkun = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/CreateAkun');
    };

    return (
        <div className="mainHeader">
            <div className="mainHeaderItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className="mainHeaderItem">
            <button className="searchButton">
                <img src={IconSearc} alt="Icon Searc" className="searchIcon" />
            </button>
            </div>
            <div className="mainHeaderItem">
            <button onClick={handleCreateAkun} className="buttonDaftar">Daftar</button>
            </div>
            <div className="mainHeaderItem">
            <button onClick={handleMasukClick} className="buttonMasuk">Masuk</button>
            </div>
        </div>
    )
}

export default Header;