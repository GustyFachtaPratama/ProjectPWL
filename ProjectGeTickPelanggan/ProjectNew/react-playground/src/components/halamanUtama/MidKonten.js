import './MidKonten.css';
import UpcomingEvent from './UpcomingEvent.js';
import LarisManis from './LarisManis.js';

const MidKonten = ()  => {
    return (
        <div className='mainMidKonten'>
            <div className='mainMidKontenItem'>
                <UpcomingEvent/>
            </div>
            <div className='mainMidKontenItem'>
                <LarisManis/>
            </div>
        </div>
    )
}

export default MidKonten;