import "./HeaderLogin.css";
import { useNavigate } from 'react-router-dom';
import GeTickLogo from '../gambar/GeTick.svg';
import IconSearc from '../gambar/iconSearc.svg';
import IconUser from '../gambar/iconUser.svg';


const HeaderLogin = ()  => {
    const navigate = useNavigate();

    const PopUpUser = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/PopUpUser');
    };

    const ButtonSearch = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/Search');
    };


    return (
        <div className="mainHeaderLogin">
            <div className="mainHeaderLoginItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className="mainHeaderLoginItem">
            <button className="searchButton" onClick={ButtonSearch}>
                <img src={IconSearc} alt="Icon Searc" className="searchIcon" />
            </button>
            </div>
            <div className="mainHeaderLoginItem">
            <button className="searchButton" onClick={PopUpUser}>
                <img src={IconUser} alt="Icon User" className="searchIcon" />
            </button>
            </div>
        </div>
    )
}

export default HeaderLogin;