

import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// import Campaigns from './pages/Campaigns';
import Campaigns from './pages/Campaigns';
import MainLayout from './container/components/MainLayout';
import Test from './container/components/Test';
import Dashboard from './pages/Dashboard';
import Login from './pages/email'

function App() {
  return (
   <Router>
    <Routes>

      
    <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Test/>}>
         <Route path="dashboard" index element={<Dashboard/>}/>
         <Route path="campaigns" element={<Campaigns/>}/>
         



      </Route>
    </Routes>
   </Router>
  );
}

export default App;
