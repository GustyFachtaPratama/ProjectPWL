import './EditDetailEventTicket.css';
import { useNavigate } from 'react-router-dom';

const EditDetailEventTicket = ()  => {
    const navigate = useNavigate();

    const halEditEvent = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual/EditEvent');
    };
    return (
        <div className='mainEditDetailEventTicket'>
            <div className='mainEditDetailEventItemTicket'>
                <div className='mainEditDetailEventTicketItemAtas'>
                    <div className='mainEditDetailEventTicketItemAtasItem'>
                        <label>
                            <p>Event Name</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                    <div className='mainEditDetailEventTicketItemAtasItem'>
                        <div className='mainEditDetailEventTicketItemAtasItemMid'>
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
                    <div className='mainEditDetailEventTicketItemAtasItem'>
                        <label>
                            <p>Location</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                </div>
            </div>
            <div className='mainEditDetailEventItemTicket'>
                <div className='duiButtonEditEventTticket'>
                    <button onClick={halEditEvent}>Description</button>
                </div>
                <div className='duiButtonEditEventTticket'>
                    <button>Ticket</button>
                </div>
            </div>
            <div className='mainEditDetailEventItemTicket'>
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
            <div className='mainEditDetailEventItemTicket'>
                <div className='duoButonSaveevent'>
                    <button className='DeleteEvent'>Delete Event</button>
                </div>
                <div className='duoButonSaveevent'>
                    <button className='SaveCreateEvent'>Save Event</button>
                </div>
            </div>
        </div>
    )
}

export default EditDetailEventTicket;