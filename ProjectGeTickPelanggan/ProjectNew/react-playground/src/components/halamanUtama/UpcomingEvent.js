import './UpcomingEvent.css';
import ItemSlideUpComing from './ItemSlideUpComing.js';

const UpcomingEvent = ()  => {
    return (
        <div className='mainUpcomingEvent'>
            <div className='mainUpcongEventItem'>
                <h2>UPCOMING EVENT THIS WEEK!</h2>
            </div>
            <div className='mainUpcongEventItem'>
                <ItemSlideUpComing/>
            </div>
            <div className='mainUpcongEventItem'>
                <div className="pageNumber">
                    <a href="halaman1.html" class="pageItem">1</a>
                    <a href="halaman2.html" class="pageItem">2</a>
                    <a href="halaman3.html" class="pageItem">3</a>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent;