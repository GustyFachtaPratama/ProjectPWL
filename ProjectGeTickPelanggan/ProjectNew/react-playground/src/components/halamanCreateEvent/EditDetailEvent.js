import './EditDetailEvent.css';
import { useNavigate } from 'react-router-dom';

const EditDetailEvent = ()  => {
    
    const navigate = useNavigate();

    const halEditEventTicket = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual/EditEvent/EditTicket');
    };

    const Profile = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual');
    };

    return (
        <div className='mainEditDetailEvent'>
            <div className='mainEditDetailEventItem'>
                <div className='mainEditDetailEventItemAtas'>
                    <div className='mainEditDetailEventItemAtasItem'>
                        <label>
                            <p>Event Name</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                    <div className='mainEditDetailEventItemAtasItem'>
                        <div className='mainEditDetailEventItemAtasItemMid'>
                        <label>
                            <p>Date</p>
                            <input  type="text" placeholder="Masukkan teks di sini" />
                        </label>
                        </div>
                        <div className='mainEditDetailEventItemAtasItemMid'>
                        <label>
                            <p>Time</p>
                            <input type="text" placeholder="Masukkan teks di sini" />
                        </label>
                        </div>
                    </div>
                    <div className='mainEditDetailEventItemAtasItem'>
                        <label>
                            <p>Location</p>
                            <input className='panjang' type="text" placeholder="Masukkan teks di sini" />
                        </label>
                    </div>
                </div>
            </div>
            <div className='mainEditDetailEventItem'>
                <div className='duoButtonEditEvent'>
                    <button>Description</button>
                </div>
                <div className='duoButtonEditEvent'>
                    <button onClick={halEditEventTicket}>Ticket</button>
                </div>
            </div>
            <div className='mainEditDetailEventItem'>
                <div className='EditDetailEventBottom'>
                    <textarea placeholder="Masukkan teks di sini" />
                </div>
            </div>
            <div className='mainEditDetailEventItem'>
            <button className='KembaliCreateEvent' onClick={Profile}>Kembali</button>
            </div>
        </div>
    )
}

export default EditDetailEvent;