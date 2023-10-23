import './KontenCreateEvent.css';
import InsertBanner from './halamanCreateEvent/InsertBanner.js';
import InsertDetailEvent from './halamanCreateEvent/InsertDetailEvent.js';

const KontenCreateEvent = ()  => {
    return (
        <div className='mainKontenCreateEvent'>
            <InsertBanner/>
            <InsertDetailEvent/>
        </div>
    )
}

export default KontenCreateEvent;