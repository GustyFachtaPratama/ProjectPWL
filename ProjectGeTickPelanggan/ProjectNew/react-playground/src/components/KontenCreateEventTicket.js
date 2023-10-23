import './KontenCreateEventTicket.css';
import InsertBanner from './halamanCreateEvent/InsertBanner.js';
import InsertDetailEventTicket from './halamanCreateEvent/InsertDetailEventTicket.js';

const KontenCreateEventTicket = ()  => {
    return (
        <div className='mainKontenCreateEventTicket'>
            <InsertBanner/>
            <InsertDetailEventTicket/>
        </div>
    )
}

export default KontenCreateEventTicket;