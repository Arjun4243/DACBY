
import './App.css';
import Login from './Component/Login.jsx/Login';
import NavbarMain from './Component/Navbar/NavbarMain';
import { useContext } from 'react';
import { StoreContextCreated } from './StoreContext.jsx';
import GlobalNotification from './Component/GlobalNotification/GlobalNotification';
import Stories from './Component/Story/Stories.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleStories from './Component/SingleStories/SingleStories.jsx';


function App() {

  const {registerShow} = useContext(StoreContextCreated);

  return (
    <>
    <div className="App">
      
      <NavbarMain />
      {registerShow?<Login/>:null}
      <GlobalNotification />
      
        <Router>
          <Routes>
            <Route path="/" element={<Stories />} />
            <Route path="/stories/:id" element={<Stories />} />
            
          </Routes>
        </Router>
      
    </div>
    
    </>
  );
}

export default App;
