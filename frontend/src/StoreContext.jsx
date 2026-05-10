import { createContext,useState,useCallback } from "react";

export const StoreContextCreated = createContext();

export const StoreContextProvider = ({children}) => {

    const [registerShow,setRegisterShow] = useState(false);
    const [switchLoginShow,setSwitchLoginShow] = useState("Register");




    //register form data handler 
     const [RegisterFormData,setRegisterFormData]=useState({
            name:"",
            email:"",
            password:""
        })
    const registerHandler=useCallback((e)=>{
        e.preventDefault();
        const {name, value}=e.target

        setRegisterFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log("register form data",RegisterFormData);
    },[RegisterFormData])

       

    const contextValue={
        registerShow,
        setRegisterShow,

        switchLoginShow,
        setSwitchLoginShow,

        //register form data handler
        RegisterFormData,
        registerHandler,
        setRegisterFormData,
        
    }

    return(
        <StoreContextCreated.Provider value={contextValue}>
            {children}
        </StoreContextCreated.Provider>
    )
}   