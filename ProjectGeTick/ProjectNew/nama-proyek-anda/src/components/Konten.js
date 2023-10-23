import './Konten.css';
import Banner from './halamanUtama/Banner.js';
import MidKonten from './halamanUtama/MidKonten.js';
import BawahKonten from './halamanUtama/BawahKonten.js';

const Konten = ()  => {
    return (
        <div className='mainKonten'>
            <Banner/>
            <MidKonten/>
            <BawahKonten/>
        </div>
    )
}

export default Konten;