import './EditAkunComponen.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import GeTickLogo from '../gambar/GeTick.svg';

const EditAkunComponen = ()  => {
    const navigate = useNavigate();

    const Profil = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/ProfilePenjual');
    }


    return (
        <div className='mainEditAkunComponen'>
            <div className="mainEditAkunComponenItem">
            <img src={GeTickLogo} alt="GeTick Logo" />
            </div>
            <div className='mainEditAkunComponenItem'>
            <h1>Edit Your Account</h1>
            </div>
            <div className='mainEditAkunComponenItem'>
                <div className='mainEditAkunComponenItemMain'>
                <h3>Email:</h3>
                </div>
                <div className='mainEditAkunComponenItemMain'>
                <input type="text" placeholder="Kim JongUn" />
                </div>
                <div className='mainEditAkunComponenItemMain'>
                <h3>Password:</h3>
                </div>
                <div className='mainEditAkunComponenItemMain'>
                <input type="text" placeholder="Kepo" />
                </div>
                <div className='mainEditAkunComponenItemMain'>
                <h3>Confirm Password:</h3>
                </div>
                <div className='mainEditAkunComponenItemMain'>
                <input type="text" placeholder="Masukkan teks di sini" />
                </div>
                <div className='mainEditAkunComponenItemMain'>
                <button className='buttonSave'>Save</button>
                </div>
            </div>
            <div className='mainEditAkunComponenItem'>
                <button className='buttonKembali' onClick={Profil}>Kembali</button>
            </div>
            <div className='mainEditAkunComponenItem'>
                <div className='bawah'>
                    <p>By clicking create button. I Agree to the Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default EditAkunComponen;