import './BawahKonten.css';
import ItemSlideKontenBawah from './ItemSlideKontenBawah.js';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const BawahKonten = ()  => {
    
    const navigate = useNavigate();

    const Explore = () => {
        // Arahkan ke rute '/Login' saat tombol diklik
        navigate('/Login/HalamanUtamaLogin/Explore');
    }
    return (
        <div className='mainBawahKonten'>
                <h2>Nikmati Keseruan Event Lainnya!</h2>
            <div className='mainBawahKontenItem'>
                <ItemSlideKontenBawah/>
            </div>
            <div className='mainBawahKontenItem'>
                <ItemSlideKontenBawah/>
            </div>
            <div className='mainBawahKontenItem'>
                <button onClick={Explore}>Explore</button>
            </div>
        </div>
    )
}

export default BawahKonten;