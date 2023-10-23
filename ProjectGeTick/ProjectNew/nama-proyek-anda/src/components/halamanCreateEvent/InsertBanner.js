import './InsertBanner.css';
import tambah from '../../gambar/tambah.svg';

const InsertBanner = ()  => {
    return (
        <div className='mainInsertBanner'>
            <div className='mainInsertBannerItem'>
                <h2>Insert Banner</h2>
                <button className='tambahEvent'>
                    <img src={tambah} alt="GeTick Logo" />
                </button>
            </div>
        </div>
    )
}

export default InsertBanner;