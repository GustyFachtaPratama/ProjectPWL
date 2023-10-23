import './LarisManis.css';

const LarisManis = ()  => {
    return (
        <div className='mainLarisManis'>
            <div className='mainLarisManisItem'>
                <h2>LarisManis</h2>
            </div>
            <div className='mainLarisManisItem'>
                <div className="tiketAcara">
                    <p>1</p>
                </div>
                <div className="tiketAcara">
                    <p>2</p>
                </div>
                <div className="tiketAcara">
                    <p>3</p>
                </div>
            </div>
            <div className='mainLarisManisItem'>
                <div className="pageNumber">
                    <a href="halaman1.html" class="pageItem">1</a>
                    <a href="halaman2.html" class="pageItem">2</a>
                    <a href="halaman3.html" class="pageItem">3</a>
                </div>
            </div>
        </div>
    )
}

export default LarisManis;