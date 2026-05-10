
import './login.css'
import { StoreContextCreated } from '../../StoreContext';
import { useContext } from 'react';

function Login() {
    const { setRegisterShow, switchLoginShow, setSwitchLoginShow, registerHandler,registerhandlerChanges } = useContext(StoreContextCreated);
    return (
        <div className='registration'>

            <h1>{switchLoginShow}</h1>

            <h1 className="close-btn" type="button" aria-label="Close" onClick={() => setRegisterShow(false)}>×</h1>
                  <div>
                        <button onClick={() => setSwitchLoginShow("Register")} style={{ marginRight: '10px' }}>Register</button>
                        <button onClick={() => setSwitchLoginShow("Login")} >Login</button>
                    </div>

            <div className='registration-container'>
                {switchLoginShow === "Register" ? <img src='/image/login.png' alt='login' className='registerOggyImage' /> : <img src='/image/registration.png' alt='registration-image' />}

                
                <form className='form' onSubmit={registerHandler}>

                  

                    {switchLoginShow === "Register" ? <div>Name: <input type='text' placeholder='Enter your name'onChange={registerhandlerChanges} name="name"/></div> : null}
                    <div>Email: <input type='email' placeholder='Enter your email' onChange={registerhandlerChanges} name="email"/></div>
                    <div>Password: <input type='password' placeholder='Enter your password' onChange={registerhandlerChanges} name="password"/></div>

                    <button type='submit' className='submit-button'>Submit</button>
                
                </form>
            </div>
        </div>
    )
}

export default Login;