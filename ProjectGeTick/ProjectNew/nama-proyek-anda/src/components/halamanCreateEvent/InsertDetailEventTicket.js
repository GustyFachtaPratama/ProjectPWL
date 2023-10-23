import './InsertDetailEventTicket.css';
import { useNavigate } from 'react-router-dom';

const InsertDetailEventTicket = ()  => {
    const navigate = useNavigate();

    const halCretaeEvent = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/CreateEvent');
    };
    return (
        <div className='mainInsertDetailEventTicket'>
            <div className='mainInserDetaiEventItemTicket'>
                <div className='mainInserDetaiEventTicketItemAtas'>
                    <div className='mainInserDetaiEventTicketItemAtasItem'>
                        <label>
                            <p>Event Name</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                    <div className='mainInserDetaiEventTicketItemAtasItem'>
                        <div className='mainInserDetaiEventTicketItemAtasItemMid'>
                        <label>
                            <p>Date</p>
                            <input  type="text" placeholder="Masukkan teks di sini" />
                        </label>
                        </div>
                        <div className='mainInserDetaiEventTicketItemAtasItemMid'>
                        <label>
                            <p>Time</p>
                            <input type="text" placeholder="Masukkan teks di sini" />
                        </label>
                        </div>
                    </div>
                    <div className='mainInserDetaiEventTicketItemAtasItem'>
                        <label>
                            <p>Location</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                </div>
            </div>
            <div className='mainInserDetaiEventItemTicket'>
                <div className='duiButton'>
                    <button onClick={halCretaeEvent}>Description</button>
                </div>
                <div className='duiButton'>
                    <button>Ticket</button>
                </div>
            </div>
            <div className='mainInserDetaiEventItemTicket'>
                <div className='InsertDetailEventTicketBottom'>
                    <div className='TicketDetail'>
                        <h2>Ticket Detail</h2>
                        <div className='fromTicketDetail'>
                            <label>
                                <p>Ticket Name</p>
                                <input type='text' placeholder='ketikan disini!'/>
                            </label>
                            <label>
                                <p>Number of Ticket</p>
                                <input type='text' placeholder='ketikan disini!'/>
                            </label>
                            <label>
                                <p>Price</p>
                                <input type='text' placeholder='ketikan disini!'/>
                            </label>
                        </div>
                    </div>
                    <div className='SaleDate'>
                        <h2>Sale Date</h2>
                        <div className='saledatekiri'>
                            <label>
                                <p>Start Date</p>
                                <input type='text' placeholder='ketikan disini!'/>
                            </label>
                            <label>
                                <p>Start Time</p>
                                <input type='text' placeholder='ketikan disini!'/>
                            </label>
                        </div>
                        <div className='saledatekanan'>
                            <label>
                               <p>End Date</p>
                                <input type='text' placeholder='ketikan disini!'/>
                            </label>
                            <label>
                                <p>End Time</p>
                                <input type='text' placeholder='ketikan disini!'/>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mainInserDetaiEventItemTicket'>
                <button className='SaveCreateEvent'>Save Event</button>
            </div>
        </div>
    )
}

export default InsertDetailEventTicket;