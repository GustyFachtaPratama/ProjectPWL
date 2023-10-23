import "./HeaderLoginPopUpUser.css";
import { useNavigate } from 'react-router-dom';
import GeTickLogo from '../gambar/GeTick.svg';
import IconSearc from '../gambar/iconSearc.svg';
import IconUser from '../gambar/iconUser.svg';


const HeaderLoginPopUpUser = ()  => {
    const navigate = useNavigate();

    const halamanUtamaLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    };

    const halamanUtama = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/');
    }

    const CreateAkun = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/CreateEvent');
    };

    
    const profil = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual');
    };

    return (
        <div className="mainHeaderLoginPopUpUser">
            <div className="mainHeaderLoginPopUpUserItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className="mainHeaderLoginPopUpUserItem">
            <button className="searchButton">
                <img src={IconSearc} alt="Icon Searc" className="searchIcon" />
            </button>
            </div>
            <div className="mainHeaderLoginPopUpUserItem">
            <button className="searchButton" onClick={halamanUtamaLogin}>
                <img src={IconUser} alt="Icon User" className="searchIcon" />
            </button>
            </div>
            <div className="mainHeaderPopUpMenu">
                <div className="mainHeaderPopUpMenuItem">
                <button onClick={profil} className='buttonProfil'>Profil</button>
                </div>
                <div className="mainHeaderPopUpMenuItem">
                <button onClick={halamanUtama} className='buttonLogout'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderLoginPopUpUser;