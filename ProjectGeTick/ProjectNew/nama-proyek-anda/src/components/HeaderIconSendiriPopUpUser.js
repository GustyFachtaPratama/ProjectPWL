import "./HeaderIconSendiriPopUpUser.css";
import { useNavigate } from 'react-router-dom';
import GeTickLogo from '../gambar/GeTick.svg';
import IconUser from '../gambar/iconUser.svg';


const HeaderIconSendiriPopUpUser = ()  => {
    const navigate = useNavigate();

    const PopUpUser = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/CreateEvent/Ticket');
    };

    const halamanUtama = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/');
    }

    const Profil = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual');
    }

    return (
        <div className="mainHeaderIconSendiri">
            <div className="mainHeaderIconSendiriItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className="mainHeaderIconSendiriItem">
            <button className="searchButton" onClick={PopUpUser}>
                <img src={IconUser} alt="Icon User" className="searchIcon" />
            </button>
            </div>
            <div className="mainHeaderPopUpMenu">
                <div className="mainHeaderPopUpMenuItem">
                <button onClick={Profil} className='buttonProfil'>Profil</button>
                </div>
                <div className="mainHeaderPopUpMenuItem">
                <button onClick={halamanUtama} className='buttonLogout'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderIconSendiriPopUpUser;