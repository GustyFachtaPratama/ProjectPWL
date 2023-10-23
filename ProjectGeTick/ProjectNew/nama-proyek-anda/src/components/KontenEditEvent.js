import './KontenEditEvent.css';
import InsertBanner from './halamanCreateEvent/InsertBanner.js';
import InsertDetailEvent from './halamanCreateEvent/InsertDetailEvent.js';
import EditDetailEvent from './halamanCreateEvent/EditDetailEvent';

const KontenEditEvent = ()  => {
    return (
        <div className='mainKontenEditEvent'>
            <InsertBanner/>
            <EditDetailEvent/>
        </div>
    )
}

export default KontenEditEvent;