

import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// import Campaigns from './pages/Campaigns';
import Campaigns from './pages/Campaigns';
import MainLayout from './container/components/MainLayout';
import Test from './container/components/Test';
import Dashboard from './pages/Dashboard';
import Login from './pages/email'
import NewCampaign from './pages/NewCampaign';

function App() {
  return (
   <Router>
    <Routes>

      
    <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Test/>}>
         <Route path="dashboard" index element={<Dashboard/>}/>
         <Route path="campaigns" element={<Campaigns/>}/>
         <Route path="campaigns/new" element={<NewCampaign />} />
      
         



      </Route>
    </Routes>
   </Router>
  );
}

export default App;
