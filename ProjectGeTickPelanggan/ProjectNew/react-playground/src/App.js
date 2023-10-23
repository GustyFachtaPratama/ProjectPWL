import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import HalamanUtama from './pages/HalamanUtama';
import Login from './pages/Login';
import CreateAkun from './pages/CreateAkun';
import HalamanUtamaLogin from './pages/HalamanUtamaLogin';
import HalamanUtamaLoginPopUpUser from './pages/HalamanUtamaLoginPopUpUser';
import HalamanCreateEvent from './pages/HalamanCreateEvent';
import HalamanCreateEventTicket from './pages/HalamanCreateEventTicket';
import HalamanCreateEventTicketPopUpUser from './pages/HalamanCreateEventTicketPopUpUser';
import HalamanProfilePenjual from './pages/HalamanProfilePenjual';
import HalamanEditAkun from './pages/HalamanEditAkun';
import HalamanExplore from './pages/HalamanExplore';
import DetailEvent from './pages/DetailEvent';
import DetailEventTicket from './pages/DetailEventTicket';
import DetailPemesanan from './pages/DetailPemesanan';
import HalamanTransaksiSukses from './pages/HalamanTransaksiSukses';
import HalamanEditEvent from './pages/HalamanEditEvent';
import HalamanEditEventTicket from './pages/HalamanEditEventTicket';
import HalamanSearchHalamanUtama from './pages/HalamanSearchHalamanUtama';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HalamanUtama/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Login/CreateAkun' element={<CreateAkun/>}/>
          <Route path='/Login/HalamanUtamaLogin' element={<HalamanUtamaLogin/>}/>
          <Route path='/Login/HalamanUtamaLogin/Search' element={<HalamanSearchHalamanUtama/>}/>
          <Route path='/Login/HalamanUtamaLogin/DetailEvent' element={<DetailEvent/>}/>
          <Route path='/Login/HalamanUtamaLogin/DetailEventTicket' element={<DetailEventTicket/>}/>
          <Route path='/Login/HalamanUtamaLogin/DetailEventTicket/DetailPemesanan' element={<DetailPemesanan/>}/>
          <Route path='/Login/HalamanUtamaLogin/DetailEventTicket/DetailPemesanan/TransaksiSukses' element={<HalamanTransaksiSukses/>}/>
          <Route path='/Login/HalamanUtamaLogin/Explore' element={<HalamanExplore/>}/>
          <Route path='/Login/HalamanUtamaLogin/ProfilePenjual' element={<HalamanProfilePenjual/>}/>
          <Route path='/Login/HalamanUtamaLogin/ProfilePenjual/EditEvent' element={<HalamanEditEvent/>}/>
          <Route path='/Login/HalamanUtamaLogin/ProfilePenjual/EditEvent/EditTicket' element={<HalamanEditEventTicket/>}/>
          <Route path='/Login/HalamanUtamaLogin/ProfilePenjual/EditAkun' element={<HalamanEditAkun  />}/>
          <Route path='/Login/HalamanUtamaLogin/PopUpUser' element={<HalamanUtamaLoginPopUpUser/>}/>
          <Route path='/Login/HalamanUtamaLogin/CreateEvent' element={<HalamanCreateEvent/>}/>
          <Route path='/Login/HalamanUtamaLogin/CreateEvent/Ticket' element={<HalamanCreateEventTicket/>}/>
          <Route path='/Login/HalamanUtamaLogin/CreateEvent/Ticket/PopUpUser' element={<HalamanCreateEventTicketPopUpUser/>}/>
          
        </Routes>      
      </Router>
    </div>  
  )
} 

export default App;
