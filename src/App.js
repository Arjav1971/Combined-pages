

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Campaigns from './pages/Campaigns';
import Campaigns from './pages/Campaigns';
import Inventory from './pages/Inventory';
import MainLayout from './container/components/MainLayout';
// import Test from './container/components/Test';
import Dashboard from './pages/Dashboard';
import Login from './pages/login'
import Email from './pages/email'
import Otp from './pages/otp'
import NewCampaign from './pages/NewCampaign';
import PropertyLocation from './pages/PropertyLocation';
import PropertySize from './pages/PropertySize';
import PropertyAttributes from './pages/PropertyAttributes';
import NewProperty from './pages/NewPropery';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />}>
          <Route path="dashboard"  element={<Dashboard />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="campaigns/new" element={<NewCampaign />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/new" element={<NewProperty />} />
          <Route path="inventory/propertysize" element={< PropertySize />} />
          <Route path="inventory/propertylocation" element={<PropertyLocation />} />
          <Route path="inventory/propertyattribute" element={<PropertyAttributes />} />
        </Route>


        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="login/email" element={<Email/>}/>
          <Route path="login/otp" element={<Otp/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
