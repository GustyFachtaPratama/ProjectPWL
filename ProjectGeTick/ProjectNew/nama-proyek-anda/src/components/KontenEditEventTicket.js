import './KontenEditEventTicket.css';
import InsertBanner from './halamanCreateEvent/InsertBanner.js';
import EditDetailEventTicket from './halamanCreateEvent/EditDetailEventTicket';

const KontenEditEventTicket = ()  => {
    return (
        <div className='mainKontenEditEventTicket'>
            <InsertBanner/>
            <EditDetailEventTicket/>
        </div>
    )
}

export default KontenEditEventTicket;