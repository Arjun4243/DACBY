import { createContext, useState, useCallback, use } from "react";

export const StoreContextCreated = createContext();

export const StoreContextProvider = ({ children }) => {

    const url = "http://localhost:3000"

    const [registerShow, setRegisterShow] = useState(false);
    const [switchLoginShow, setSwitchLoginShow] = useState("Register");




    //register form data handler 
    const [RegisterFormData, setRegisterFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const registerhandlerChanges=useCallback((e) => {
        e.preventDefault();

         const { name, value } = e.target

        setRegisterFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    }, [])

    const registerHandler = useCallback(async(e) => {
        e.preventDefault();
   

        const response = await fetch(`${url}/api/user/register`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(RegisterFormData)
        })

        console.log("response", response);

        console.log("register form data", RegisterFormData);
    }, [RegisterFormData])



    const contextValue = {
        registerShow,
        setRegisterShow,

        switchLoginShow,
        setSwitchLoginShow,

        //register form data handler
        RegisterFormData,
        registerHandler,
        setRegisterFormData,
        registerhandlerChanges,


        //url
        url

    }

    return (
        <StoreContextCreated.Provider value={contextValue}>
            {children}
        </StoreContextCreated.Provider>
    )
}   