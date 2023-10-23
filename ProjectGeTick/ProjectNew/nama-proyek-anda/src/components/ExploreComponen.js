import './ExploreComponen.css';
import { useNavigate } from 'react-router-dom';
import ItemSlideExplore from './halamanUtama/itemSlideExplore';
import BackButton from '../gambar/backButton.png'

const ExploreComponen = ()  => {
    const navigate = useNavigate();

    const halamanUtamaLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    };

    return (
        <div className='mainExploreComponen'>
            <div className='mainExploreComponenBackground'>
                <button onClick={halamanUtamaLogin} className='buttonKembaliExplore'><img src={BackButton} /><p>Kembali</p></button>
                <h2>Explore Event</h2>
                <div className='mainExploreComponenItem'>
                    <ItemSlideExplore/>
                </div>
                <div className='mainExploreComponenItem'>
                    <ItemSlideExplore/>
                </div>
                <div className='mainExploreComponenItem'>
                    <ItemSlideExplore/>
                </div>
                <div className='mainExploreComponenItem'>
                    <div className="pageNumberExplore">
                        <a href="halaman1.html" class="pageItemExplore">1</a>
                        <a href="halaman2.html" class="pageItemExplore">2</a>
                        <a href="halaman3.html" class="pageItemExplore">3</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreComponen;