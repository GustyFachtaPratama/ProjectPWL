import "./HeaderIconSendiri.css";
import { useNavigate } from 'react-router-dom';
import GeTickLogo from '../gambar/GeTick.svg';
import IconUser from '../gambar/iconUser.svg';


const HeaderIconSendiri = ()  => {
    const navigate = useNavigate();

    const PopUpUser = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/CreateEvent/Ticket/PopUpUser');
    };


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
        </div>
    )
}

export default HeaderIconSendiri;