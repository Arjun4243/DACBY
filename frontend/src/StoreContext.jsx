import { createContext, useState, useCallback } from "react";

export const StoreContextCreated = createContext();

export const StoreContextProvider = ({ children }) => {

    const url = "http://localhost:3000"

    //GlobalNotification handler down
    const [globalNotificationShow, setGlobalNotificationShow] = useState({
        show: false,
        headline: "",
        image: "/image/green right.gif",
        message: ""
    });
    //GlobalNotification handler up

    const [registerShow, setRegisterShow] = useState(false);
    const [switchLoginShow, setSwitchLoginShow] = useState("Register");




    //register form data handler down
    const [RegisterFormData, setRegisterFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const registerhandlerChanges = useCallback((e) => {
        e.preventDefault();

        const { name, value } = e.target

        setRegisterFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

    }, [])

    const registerHandler = useCallback(async (e) => {
        e.preventDefault();

        const response = await fetch(`${url}/api/user/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(RegisterFormData)
        });

        // Parse the JSON body into a JS object
        const data = await response.json();

      if (data.status === true) {
  setGlobalNotificationShow({
    show: true,
    headline: data.headline,
    image: data.image,
    message: data.message
  });

  localStorage.setItem("token", data.token);
  
  setTimeout(() => {
    setGlobalNotificationShow({
      show: false,
      headline: "",
      image: "",
      message: ""
    });
  }, 3000);
}







        console.log("register form data", RegisterFormData);
    }, [RegisterFormData])
    //register form data handler up




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
        url,

        //GlobalNotification handler
        globalNotificationShow,
        setGlobalNotificationShow,


    }

    return (
        <StoreContextCreated.Provider value={contextValue}>
            {children}
        </StoreContextCreated.Provider>
    )
}   