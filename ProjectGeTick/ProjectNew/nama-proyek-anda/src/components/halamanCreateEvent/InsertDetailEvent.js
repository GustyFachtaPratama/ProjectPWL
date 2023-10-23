import './InsertDetailEvent.css';
import { useNavigate } from 'react-router-dom';

const InsertDetailEvent = ()  => {
    
    const navigate = useNavigate();

    const halCretaeEventTicket = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/CreateEvent/Ticket');
    };

    const halUtamanLogin = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin');
    };

    return (
        <div className='mainInsertDetailEvent'>
            <div className='mainInserDetaiEventItem'>
                <div className='mainInserDetaiEventItemAtas'>
                    <div className='mainInserDetaiEventItemAtasItem'>
                        <label>
                            <p>Event Name</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                    <div className='mainInserDetaiEventItemAtasItem'>
                        <div className='mainInserDetaiEventItemAtasItemMid'>
                        <label>
                            <p>Date</p>
                            <input  type="text" placeholder="Masukkan teks di sini" />
                        </label>
                        </div>
                        <div className='mainInserDetaiEventItemAtasItemMid'>
                        <label>
                            <p>Time</p>
                            <input type="text" placeholder="Masukkan teks di sini" />
                        </label>
                        </div>
                    </div>
                    <div className='mainInserDetaiEventItemAtasItem'>
                        <label>
                            <p>Location</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                </div>
            </div>
            <div className='mainInserDetaiEventItem'>
                <div className='duoButton'>
                    <button>Description</button>
                </div>
                <div className='duoButton'>
                    <button onClick={halCretaeEventTicket}>Ticket</button>
                </div>
            </div>
            <div className='mainInserDetaiEventItem'>
                <div className='InsertDetailEventBottom'>
                    <textarea placeholder="Masukkan teks di sini" />
                </div>
            </div>
            <div className='mainInserDetaiEventItem'>
            <button className='KembaliCreateEvent' onClick={halUtamanLogin}>Kembali</button>
            </div>
        </div>
    )
}

export default InsertDetailEvent;