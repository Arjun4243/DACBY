
import './App.css';
import Login from './Component/Login.jsx/Login';
import NavbarMain from './Component/Navbar/NavbarMain';
import { useContext } from 'react';
import { StoreContextCreated } from './StoreContext.jsx';
import GlobalNotification from './Component/GlobalNotification/GlobalNotification';


function App() {

  const {registerShow} = useContext(StoreContextCreated);

  return (
    <div className="App">
      
      <NavbarMain />
      {registerShow?<Login/>:null}
      <GlobalNotification />
    </div>
  );
}

export default App;
