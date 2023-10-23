import './CreateAkunComponen.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import GeTickLogo from '../gambar/GeTick.svg';

const CreateAkunComponen = ()  => {
    const navigate = useNavigate();

    const Login = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login');
    }

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='mainCreateAkunComponen'>
            <div className="mainCreateAkunComponenItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className='mainCreateAkunComponenItem'>
            <h1>Create Your Account</h1>
            </div>
            <div className='mainCreateAkunComponenItem'>
                <div className='mainCreateAkunComponenItemMain'>
                <h3>Email:</h3>
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <input type="text" placeholder="Masukkan teks di sini" />
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <h3>Password:</h3>
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <input type="text" placeholder="Masukkan teks di sini" />
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <h3>Confirm Password:</h3>
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <input type="text" placeholder="Masukkan teks di sini" />
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <h3>Pilih Role:</h3>
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <label>
                    <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                    />
                    Pembeli
                </label>

                <label>
                    <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                    />
                    Penjual
                </label>
                </div>
                <div className='mainCreateAkunComponenItemMain'>
                <button className='buttonLogin' onClick={Login}>Create Akun</button>
                </div>
            </div>
            <div className='mainCreateAkunComponenItem'>
                <button className='buttonKembali' onClick={Login}>Kembali</button>
            </div>
            <div className='mainCreateAkunComponenItem'>
                <div className='bawah'>
                    <p>By clicking create button. I Agree to the Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default CreateAkunComponen;