import "./HeaderSearch.css";
import { useNavigate } from 'react-router-dom';
import GeTickLogo from '../gambar/GeTick.svg';
import IconSearc from '../gambar/iconSearc.svg';
import IconUser from '../gambar/iconUser.svg';
import x from '../gambar/x.svg';


const HeaderSearch = ()  => {
    const navigate = useNavigate();

    const PopUpUser = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/PopUpUser');
    };

    const HalamanUtamaLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    };


    return (
        <div className="mainHeaderSearch">
            <div className="mainHeaderSearchItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className="mainHeaderSearchItem">
            <button className="searchButtonSearch">
                <label>
                    <img src={IconSearc} alt="Icon Searc" className="searchIcon" />
                    <input type="text">
                        
                    </input>
                    <button onClick={HalamanUtamaLogin}>
                    <img src={x} alt="Icon Searc" className="searchIcon" />
                    </button>
                </label>
            </button>
            </div>
            <div className="mainHeaderSearchItem">
            <button className="searchButton" onClick={PopUpUser}>
                <img src={IconUser} alt="Icon User" className="searchIcon" />
            </button>
            </div>
        </div>
    )
}

export default HeaderSearch;